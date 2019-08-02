import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import { getCountriesByName, getSEKRates } from '../utils/apis';

import Interface from '../components/Interface';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

function Main() {
  const [country, setCountry] = useState(''); // country typed by the user
  const [countries, setCountries] = useState([]); // countries returned from the API
  const [sekAmount, setSekAmount] = useState(1); // SEK amount typed by the user
  const [sekRates, setSekRates] = useState({}); // SEK rates returned from the API
  const [isToggleOn, setIsToggleOn] = useState(false); // if true, renders a dropdown component
  const [loading, setLoading] = useState(true); // while true, renders a loading interface
  const [serverError, setServerError] = useState(false); // if true, renders an error interface
  const [noCountry, setNoCountry] = useState(false); // if true, renders a 'country not found' mes

  useEffect(() => {
    // get all countries matching user's input
    const getCountries = async () => {
      try {
        const { data } = await axios.get(`${getCountriesByName}${country}`);
        setCountries(data); // set the returned data to the state
        setNoCountry(false);
        setServerError(false);
      } catch (err) {
        setLoading(false); // set loading state
        const { response } = err;
        // set errors depending on the error type
        if (response.data.status === 404) {
          setNoCountry(true);
        } else {
          setServerError(true);
        }
      }
    };
    // if user typed at least one letter
    if (country.length > 0) {
      getCountries(); // fire getCountries
      setIsToggleOn(true); // and set toggle to true to render a dropwdown list box
    }

    // hide dropdown list if input has no characters
    if (country.length === 0) {
      setIsToggleOn(false);
    }
  }, [country]); // fire this effect every time user types

  useEffect(() => {
    // get SEK values once App is rendered
    const getSekValues = async () => {
      try {
        const { data } = await axios.get(getSEKRates);
        setSekRates(data.rates); // set the returned object to the state
        setLoading(false);
      } catch (err) {
        setLoading(false); // set loading state
        setServerError(true); // set error state
      }
    };
    getSekValues();
  }, []); // fire this effect every time App re-renders

  // render a loading interface while data is being fetched
  if (loading) {
    return (
      <MainContainer>
        <Interface primaryMessage="Loading..." secondaryMessage="" />
      </MainContainer>
    );
  }

  // render an error message if data fetch fails
  if (serverError) {
    return (
      <MainContainer>
        <Interface
          primaryMessage="There has been a server problem!"
          secondaryMessage="Please try again later"
        />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {/* render two inputs: one for SEK amount and the other for country */}
      <Input
        title="SEK Amount to Convert:"
        type="number"
        value={sekAmount}
        placeholder="SEK Amount"
        onchange={e => setSekAmount(Number(e.target.value))}
      />
      <Input
        title="Search for Countries:"
        type="text"
        value={country}
        placeholder="Country"
        onchange={e => setCountry(e.target.value.toString())}
      />

      {/* render a dropdown list if user has typed a letter */}
      {!isToggleOn ? null : (
        <Dropdown
          notFound={noCountry}
          countries={countries}
          sekAmount={sekAmount}
          sekRates={sekRates}
        />
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #ffffff;
`;

export default Main;
