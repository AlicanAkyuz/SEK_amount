import React from 'react';
import PropTypes from 'prop-types';

import { FullWidthContainer, PrimaryText, SecondaryText } from '../containers/Main/styles';

const Interface = ({ primaryMessage, secondaryMessage }) => (
  <FullWidthContainer>
    <PrimaryText>{primaryMessage}</PrimaryText>
    <SecondaryText>{secondaryMessage}</SecondaryText>
  </FullWidthContainer>
);

Interface.propTypes = {
  primaryMessage: PropTypes.string.isRequired,
  secondaryMessage: PropTypes.string.isRequired,
};

export default Interface;
