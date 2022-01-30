import React, { useRef } from 'react';
import CompanyName from '../companyName/companyName';
import InputField from '../inputField/inputField';
import RememberPassword from '../rememberPassword/rememberPassword';
import './loginForm.css'

const LoginForm = ({logged, onLogin}) => {

  const emailRef = useRef('')
  const passwordRef = useRef('')

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
            onLogin(emailRef.current.value, passwordRef.current.value)
          }} className='input-text-button'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
