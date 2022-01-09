import React from 'react';
import './inputField.css'

const InputField = (props) => {


  const inputName = props.name.toLowerCase() === 'contraseña' ?
  'contrasenia' :
  props.name.toLowerCase()
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {props.name}
      </label>
      <input name={inputName} type={props.type} className='input-field' 
      placeholder={props.placeholder}></input>
    </div>
  );
}

export default InputField;
