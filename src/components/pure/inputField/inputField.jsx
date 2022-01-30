import React from 'react';
import './inputField.css'

const InputField = React.forwardRef(({ name, type, placeholder, value }, ref) => {

  const inputName = name.toLowerCase() === 'contraseña' ?
  'contrasenia' :
  name.toLowerCase()
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {name}
      </label>
      <input name={inputName} 
        ref={ ref ? ref : '' }
        type={ type } 
        className='input-field' 
        placeholder={ placeholder } 
        defaultValue={ value ? value : '' }/>
    </div>
  );
})

export default InputField;
