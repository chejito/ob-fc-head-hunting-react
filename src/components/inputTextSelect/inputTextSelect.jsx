import React from 'react';
import './inputTextSelect.css'

const InputTextSelect = (props) => {

  const options = props.options

  const inputName = props.name.toLowerCase()
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {props.name}
      </label>
      <input name={inputName} type='text' className='input-field' 
      list='options' placeholder={props.placeholder}/>      
      <datalist id='options'>
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={index}>{option}</option>
        ))}
      </datalist>
    </div>
  );
}

export default InputTextSelect;
