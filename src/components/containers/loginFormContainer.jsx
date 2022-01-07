import React from 'react';
import CompanyName from '../companyName';
import InputText from '../inputText';
import LoginButton from '../loginButton';
import RememberPassword from '../rememberPassword';

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
