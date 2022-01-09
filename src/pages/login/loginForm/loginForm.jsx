import React from 'react';
import CompanyName from '../../../components/companyName/companyName';
import InputField from '../../../components/inputField/inputField';
import LoginButton from '../../../components/loginButton/loginButton';
import RememberPassword from '../../../components/rememberPassword/rememberPassword';
import './loginForm.css'

const LoginFormContainer = () => {

  const fields = [
    {
      name: 'Email',
      type: 'text',
      placeholder: 'Introduce tu correo'
    },
    {
      name: 'Contraseña',
      type: 'text',
      placeholder: 'Introduce tu contraseña'
    }
  ]

  return (
    <div className='login-form-container'>
      <CompanyName></CompanyName>
      <form>
        { fields.map((field, index) => (
          <InputField name={field.name} type={field.type} 
          placeholder={field.placeholder} key={index}/>
        ))}
        <RememberPassword></RememberPassword>
        <LoginButton value="Iniciar Sesión"></LoginButton>
      </form>
    </div>
  );
}

export default LoginFormContainer;
