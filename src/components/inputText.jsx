import React from 'react';

const InputText = (props) => {

  const inputName = props.name.toLowerCase() === 'contraseña' ?
  'contrasenya' :
  props.name.toLowerCase()
  
  return (
    <div className='input-text' style={{
      width: '100%',
      height: '68px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontSize: '14px'
    }}>
      <label htmlFor={inputName} style={{
        height: '16px',
        width: '100%',
        fontWeight: '700',
        color: 'var(--primary-font-color)',
        letterSpacing: '0.05em',
        fontSize: '14px'
      }}>{props.name}</label>
      <input name={inputName} placeholder={props.placeholder} style={{
        height: '40px',
        width: '100%',
        backgroundColor: 'var(--main-bg-color)',
        border: 'none',
        fontWeight: '500',
        color: 'var(--secondary-font-color)',
        padding: '0 15px',
        letterSpacing: '0.005em',
        outline: 'none',
        fontSize: '14px'      
      }}></input>
    </div>
  );
}

export default InputText;
