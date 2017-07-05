import React from 'react';

const Button = ({text = 'UNDEFINED BUTTON', onClick}) => {
  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
