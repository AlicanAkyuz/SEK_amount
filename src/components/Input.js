import React from 'react';
import PropTypes from 'prop-types';

import { FullWidthContainer, PrimaryText, InputField } from '../containers/Main/styles';

const Input = ({
  title, type, value, placeholder, onchange,
}) => (
  <FullWidthContainer>
    <PrimaryText>{title}</PrimaryText>
    <InputField type={type} value={value} placeholder={placeholder} onChange={e => onchange(e)} />
  </FullWidthContainer>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};

export default Input;
