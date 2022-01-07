import React from 'react';

const RememberPassword = () => {
  return (
    <div className='remember-password'>
      <div style={{
        width: '227px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
        }}>
        <input type='checkbox' name='remember'style={{         
          margin: '0 13px 0 5px'
        }}/>
        <label htmlFor='remember'>Recuérdame</label>
      </div>           
      
      <a href='#' style={{
        color: 'var(--primary-color)',
        fontWeight: '600'
      }}>He olvidado la contraseña</a>
      
    </div>
  );
}

export default RememberPassword;
