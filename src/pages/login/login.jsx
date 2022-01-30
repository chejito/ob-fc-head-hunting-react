import React from 'react';
import LoginFormContainer from '../../components/container/loginFormContainer/loginFormContainer';
import LoginFooterContainer from '../../components/pure/loginFooter/loginFooter'
import './login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <section className='login-section'>
      <LoginFormContainer/>
      <LoginFooterContainer/>
      </section>      
    </div>
  )
}

export default Login
