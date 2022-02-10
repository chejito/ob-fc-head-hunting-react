import React, { useRef, useContext, useState } from 'react';
import CompanyName from '../companyName/companyName';
import InputField from '../inputField/inputField';
import RememberPassword from '../rememberPassword/rememberPassword';
import { login } from '../../../services/AuthService'
import './loginForm.css'

const LoginForm = ({userState, updateUser}) => {  


  const emailRef = useRef('')
  const passwordRef = useRef('')

  const authUser = () => {  
    
    login(emailRef.current.value, passwordRef.current.value)
      .then((response) => {
        if(response.data.token) {
          sessionStorage.setItem('token', response.data.token)
          updateUser(
            {
              loggedIn: true,
              user: response.data.user,
              token: response.data.token
            }
          )
        } else {
          sessionStorage.removeItem('token')
          throw new Error('Login failure')
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`)
        sessionStorage.removeItem('token')
      })
  }

  return (
    <div className='login-form-container'>
      <CompanyName></CompanyName>
      <form>       
          <InputField ref={emailRef} name='Email' type='text' 
          placeholder='Introduce tu correo'/>

          <InputField ref={passwordRef} name='Contraseña' type='text' 
          placeholder='Introduce tu contraseña'/>
        
        <RememberPassword></RememberPassword>
        <button 
          onClick={(e) => {
            e.preventDefault()
            authUser()}} className='input-text-button'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
