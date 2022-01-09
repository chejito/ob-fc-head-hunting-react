import React from 'react';
import LoginFooterContainer from './loginFooter/loginFooter'
import LoginFormContainer from './loginForm/loginForm';
import './login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <section className='login-section'>
      <LoginFormContainer></LoginFormContainer>
      <LoginFooterContainer></LoginFooterContainer>
      </section>      
    </div>
  )
}

export default Login
