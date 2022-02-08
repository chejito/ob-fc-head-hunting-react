import React from 'react';
import './inputTextSelect.css'

const InputTextSelect = React.forwardRef(({options, name, placeholder}, ref) => {

  const inputName = name.toLowerCase()
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {name}
      </label>
      <input 
        ref={ref}
        name={inputName} 
        type='text' className='input-field' 
        list='options' placeholder={placeholder}/>      
      <datalist id='options'>
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={index}>{option}</option>
        ))}
      </datalist>
    </div>
  );
})

export default InputTextSelect;
