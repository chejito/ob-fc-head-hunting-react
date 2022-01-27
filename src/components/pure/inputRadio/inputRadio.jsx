import React from 'react';
import './inputRadio.css'

const InputRadio = (props) => {

  const inputName = props.name.toLowerCase()
  const options = props.options
  
  return (
    <div className='input'>
      <p className='input-label'>{props.name}</p>
      {options.map((option, index) => (
        <div className='radio-option' key={index}>
          <input name={props.label} type='radio' className='radio-field' 
          value={option}/>
          <label htmlFor={props.label} className='option-label'>          
              {option}
          </label>
        </div>  
      ))}    
    </div>
  );
}

export default InputRadio;
