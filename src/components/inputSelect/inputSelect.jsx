import React from 'react';
import './inputSelect.css'

const InputSelect = (props) => {

  const options = props.options

  const inputName = props.name.toLowerCase()
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {props.name}
      </label>
      <select name={inputName} className='input-field' defaultValue={props.value ? {
        value: props.value.toLowerCase(),
        label: props.value
         } : null }>
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={index}>{option}</option>
        ))}        
      </select>
    </div>
  );
}

export default InputSelect;
