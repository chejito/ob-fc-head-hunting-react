import React from 'react';
import './rememberPassword.css'

const RememberPassword = () => {
  return (
    <div className='remember-password'>
      <div>
        <input type='checkbox' className='remember-input' name='remember'/>
        <label htmlFor='remember' className='remember-input-label'>Recuérdame</label>
      </div>      
      <a href='#' className='password-resend-link'>
        He olvidado la contraseña
      </a>      
    </div>
  );
}

export default RememberPassword;
