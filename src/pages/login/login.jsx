import React from 'react';
import LoginForm from '../../components/pure/loginForm/loginForm';
import LoginFooterContainer from '../../components/pure/loginFooter/loginFooter'
import './login.css'

const Login = ({userState, updateUser}) => {
  return (
    <div className='login-container'>
      <section className='login-section'>
      <LoginForm userState={userState} updateUser={updateUser}/>
      <LoginFooterContainer/>
      </section>      
    </div>
  )
}

export default Login
