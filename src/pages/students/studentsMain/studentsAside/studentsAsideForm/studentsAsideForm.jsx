import React from 'react';
import InputField from '../../../../../components/inputField/inputField';
import InputSelect from '../../../../../components/inputSelect/inputSelect';
import InputTags from '../../../../../components/inputTags/inputTags';
import './studentsAsideForm.css'
import { countries } from '../../../../../data/countries';
import InputRadio from '../../../../../components/inputRadio/inputRadio';

const StudentsAsideForm = () => {

  const countryList = []
  const cityList = []
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  countries.forEach(country => countryList.push(country.name))
  countries.forEach(country => cityList.push(country.cities))

  

  return (
    <form className='aside-form'>
      <InputTags></InputTags>
      <InputSelect name='País' options={countryList}/>
      <InputSelect name='Ciudad' options={cityList[0]}/>
      <InputRadio name='Presencial / a distancia' label='modalidad' options={modalities}/>
      <InputRadio name='Posibilidad traslado' label='traslado' options={move}/>
      
    </form>
  );
}

export default StudentsAsideForm;
