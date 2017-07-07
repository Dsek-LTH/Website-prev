import React from 'react';
import './TextField.css';

const TextField = ({
  type = 'text',
  placeholder = '',
  disabled = false,
  autofocus = false,
  value = null
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      autofocus={autofocus}
    />
  );
};

export default TextField;
