import React from 'react';
import CompanyName from '../../../components/companyName/companyName';
import InputText from '../../../components/inputText/inputText';
import LoginButton from '../../../components/loginButton/loginButton';
import RememberPassword from '../../../components/rememberPassword/rememberPassword';
import './loginForm.css'

const LoginFormContainer = () => {
  return (
    <div className='login-form-container'>
      <CompanyName></CompanyName>
      <form>
        <div className='input-container'>
          <InputText name="Email" placeholder="Introduce tu correo"/>
          <InputText name="Contraseña" placeholder="Introduce tu contraseña"/>
        </div>
        <RememberPassword></RememberPassword>
        <LoginButton value="Iniciar Sesión"></LoginButton>
      </form>
    </div>
  );
}

export default LoginFormContainer;
