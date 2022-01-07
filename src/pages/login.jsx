import React from 'react';
import LoginFooterContainer from '../components/containers/loginFooterContainer';
import LoginFormContainer from '../components/containers/loginFormContainer';
import '../styles/login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <section>
      <LoginFormContainer></LoginFormContainer>
      <LoginFooterContainer></LoginFooterContainer>
      </section>      
    </div>
  )
}

export default Login
