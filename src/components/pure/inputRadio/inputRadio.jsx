import React from 'react';
import './inputRadio.css'

const InputRadio = React.forwardRef(({ name, options, value, onChange }, ref) => {

  const inputName = name.toLowerCase()
  
  return (
    <div className='input'>
      <p className='input-label'>{name}</p>
      {options.map((option, index) => {
        return (   
          <div className='radio-option' key={index}>
            <input 
            ref={ref}
            name={inputName} type='radio' className='radio-field' 
            value={option} defaultChecked={option === value}
            onChange={onChange}/>
            <label htmlFor={inputName} className='option-label'>          
                {option}
            </label>
          </div> 
        )
      })}    
    </div>
  );
})

export default InputRadio;
