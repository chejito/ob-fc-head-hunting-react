import React, { useRef } from 'react';
import './inputTextSelect.css'

const InputTextSelect = React.forwardRef(({options, name, placeholder, addTag}, ref) => {

  const inputName = name.toLowerCase()
  const tagRef = useRef('')
  const onSelect = (e) => {
    e.preventDefault()
    let newTag = tagRef.current.value
    if (newTag !== '')  addTag(newTag)
    tagRef.current.value = ''      
  }
  
  return (
    <div className='input'>
      <label htmlFor={inputName} className='input-label'>
        {name}
      </label>
      <input 
        ref={tagRef}
        name={inputName} 
        type='text' className='input-field' 
        list='options' placeholder={placeholder}
        onClick={onSelect}/>      
      <datalist id='options'>
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={index}>{option}</option>
        ))}
      </datalist>
    </div>
  );
})

export default InputTextSelect;
