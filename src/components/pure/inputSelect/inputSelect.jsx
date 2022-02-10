import React from 'react';
import './inputSelect.css'

const InputSelect = React.forwardRef(({options, name, value}, ref) => {

  const inputName = name.toLowerCase()

  const optionsToShow = []
  if (options !== null && options !== undefined) options.forEach(element => optionsToShow.push(element))
    
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {name}
      </label>
      <select
        ref={ref} 
        name={inputName} 
        className='input-field'>
          {options.map((option, index) => (
            option === value ?         
              <option value={option.toLowerCase()} key={index} selected>{option}</option>            
              :            
              <option value={option.toLowerCase()} key={index}>{option}</option>                       
          ))}
      </select>
    </div>
  );
})

export default InputSelect;
