import React, { useState } from 'react';
import InputField from '../../pure/inputField/inputField';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputTags from '../../pure/inputTags/inputTags';
import './studentsAsideForm.css'
import { countries } from '../../../data/countries';
import InputRadio from '../../pure/inputRadio/inputRadio';

const StudentsAsideForm = () => {

  const countryList = []
  const cityList = []
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  countries.forEach(country => countryList.push(country.name))
  countries.forEach(country => cityList.push(country.cities))

  const selectedTags = []

  const [tagsState, setTagsState] = useState(selectedTags);

  const addTag = (newTag) => {
    let newTags = [...tagsState]
    if (!tagsState.includes(newTag)) {
      newTags.push(newTag)
      setTagsState(newTags)
    }  
  }

  const removeTag = (tag) => {
    let newTags = [...tagsState].filter(item => item !== tag)
    setTagsState(newTags)
  }

  return (
    <form className='aside-form'>
      <InputTags selectedTags={tagsState} addTag={addTag} removeTag={removeTag}/>
      <InputSelect name='País' options={countryList}/>
      <InputSelect name='Ciudad' options={cityList[0]}/>
      <InputRadio name='Presencialidad' options={modalities} value={''}/>
      <InputRadio name='Traslado' options={move} value={''}/>
      
    </form>
  );
}

export default StudentsAsideForm;
