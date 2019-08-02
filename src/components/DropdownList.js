import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, PrimaryText, ListText } from '../styles';

const DropdownList = ({
  name, capital, population, currencyCode, sekValue,
}) => (
  <ListItem>
    <PrimaryText>{name}</PrimaryText>
    <ListText>{`Capital City: ${capital}`}</ListText>
    <ListText>{`Population: ${population}`}</ListText>
    <ListText>{`Currency: ${currencyCode}`}</ListText>
    <ListText>{sekValue}</ListText>
  </ListItem>
);

DropdownList.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  sekValue: PropTypes.string.isRequired,
};

export default DropdownList;
