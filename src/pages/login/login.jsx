import React from 'react';
import LoginFooterContainer from '../../components/pure/loginFooter/loginFooter'
import LoginFormContainer from '../../components/container/loginForm/loginForm';
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
