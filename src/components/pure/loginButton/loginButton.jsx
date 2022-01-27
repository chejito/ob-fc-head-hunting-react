import React from 'react';
import './loginButton.css'

const LoginButton = (props) => {
  return (
    <button className='input-text-button'>
      {props.value}
    </button>
  );
}

export default LoginButton;
