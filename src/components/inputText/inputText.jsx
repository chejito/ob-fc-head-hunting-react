import React from 'react';
import './inputText.css'

const InputText = (props) => {

  const inputName = props.name.toLowerCase() === 'contraseña' ?
  'contrasenya' :
  props.name.toLowerCase()
  
  return (
    <div className='input-field'>
      <label htmlFor={inputName} className='input-text-label'>
        {props.name}
      </label>
      <input name={inputName} className='input-text' 
      placeholder={props.placeholder}></input>
    </div>
  );
}

export default InputText;
