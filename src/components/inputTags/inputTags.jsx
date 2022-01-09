import React from 'react';
import './inputTags.css'
import { tags } from '../../data/tags'
import InputTextSelect from '../inputTextSelect/inputTextSelect';

const InputTags = () => {

  const field = {
    name: 'Etiquetas',
    placeholder: 'Escribe para buscar...',
    tags: ['html&css', 'react', 'angular']
  }

  const optionTags = []
  tags.forEach(tag => {
    optionTags.push(tag.name)
  })


  return (
    <div className='input-tags'>
      <InputTextSelect name={field.name} placeholder={field.placeholder} 
      options={optionTags}></InputTextSelect>
      <div className='tags-display'>
        {field.tags.map((tag, index) => (
          <span key={index} className='tags-display-tag'>
            {tag}
            <span className='material-icons clear-icon'>
              clear
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default InputTags;
