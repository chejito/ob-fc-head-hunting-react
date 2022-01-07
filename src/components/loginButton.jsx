import React from 'react';
import '../styles/loginButton.css'

const LoginButton = (props) => {
  return (
    <button >
      {props.value}
    </button>
  );
}

export default LoginButton;
