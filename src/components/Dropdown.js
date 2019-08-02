import React from 'react';
import PropTypes from 'prop-types';

import {
  FullWidthContainer,
  DropdownBox,
  BoldTitle,
  SecondaryText,
} from '../containers/Main/styles';

import sliceNumber from '../utils/sliceNumber';
import dotifyNumber from '../utils/dotifyNumber';
import DropdownList from './DropdownList';

const Dropdown = ({
  notFound, countries, sekAmount, sekRates,
}) => (
  <FullWidthContainer>
    <DropdownBox>
      {notFound ? (
        <BoldTitle>0 Matches</BoldTitle>
      ) : (
        <BoldTitle>
          {/* render different strings acc to found country number */}
          {countries.length > 1 ? `${countries.length} Matches` : `${countries.length} Match!`}
        </BoldTitle>
      )}

      {notFound ? (
        <SecondaryText>No country with that name found</SecondaryText>
      ) : (
        countries.map((country) => {
          // set to SEK value (send as prop to the list) to 'Not found' by default
          let sekValue = `Rates for ${country.currencies[0].code} not found`;

          // change the SEK value if the API has the exchange rate
          if (sekRates[country.currencies[0].code]) {
            // slice the numebr for better UX
            // calculate the total value
            // and add the target country's currency to the string
            sekValue = `${sekAmount} SEK = ${sliceNumber(
              sekRates[country.currencies[0].code] * sekAmount,
            )} ${country.currencies[0].code}`;
          }
          return (
            <DropdownList
              key={country.numericCode}
              name={country.name}
              capital={country.capital}
              population={dotifyNumber(country.population)}
              currencyCode={country.currencies[0].code ? country.currencies[0].code : 'Not Found'}
              sekValue={sekValue} // calculated sekValue or a 'not found' message
            />
          );
        })
      )}
    </DropdownBox>
  </FullWidthContainer>
);

Dropdown.propTypes = {
  notFound: PropTypes.bool.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  sekAmount: PropTypes.number.isRequired,
  sekRates: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Dropdown;
