import React, { useState } from 'react';
import './inputTags.css'
import { tags } from '../../../data/tags'
import InputTextSelect from '../inputTextSelect/inputTextSelect';
import InputSelect from '../inputSelect/inputSelect';

const InputTags = ({selectedTags, addTag, removeTag}) => {
 
  const name = 'Etiquetas'
  const placeholder = 'Escribe para buscar...'
 

  const optionTags = []
  tags.forEach(tag => optionTags.push(tag))
  
  const displayTags = []
  selectedTags.forEach(tag => displayTags.push(tag))

  return (
    <div className='input-tags'>
      <InputTextSelect name={name} placeholder={placeholder} 
      options={optionTags} addTag={addTag}/>
      <div className='tags-display'>
        {displayTags.map((tag) => (
          <span 
            key={tag} 
            className='tags-display-tag' 
            >
            {tag}
            <span className='material-icons clear-icon'
            onClick={(e) => {
              e.preventDefault()
              removeTag(tag)
            }}>
              clear
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default InputTags;
