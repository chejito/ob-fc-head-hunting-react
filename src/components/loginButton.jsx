import React from 'react';

const LoginButton = (props) => {
  return (
    <button style={{
      height: '40px',
      border: 'none',
      backgroundColor: 'var(--primary-color)',
      color: 'var(--secondary-bg-color)',
      fontSize: '15px',
      fontWeight: 700
    }}>
      {props.value}
    </button>
  );
}

export default LoginButton;