import React, { useRef, useState } from 'react';
import InputField from '../../pure/inputField/inputField';
import './addStudentForm.css'
import { countries } from '../../../data/countries';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputTags from '../../pure/inputTags/inputTags'
import UploadFile from '../../pure/uploadFile/uploadFile';
import InputRadio from '../../pure/inputRadio/inputRadio';


const AddStudentForm = () => {

  const fullnameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')

  const countryList = []
  const cityList = []
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  countries.forEach(country => countryList.push(country.name))
  countries.forEach(country => cityList.push(country.cities))

  const selectedTags = []
  const [tagsState, setTagsState] = useState(selectedTags);

  const [photoUrlState, setPhotoUrlState] = useState('');
  const [resumeUrlState, setResumeUrlState] = useState('');
  
  const updatePhotoUrl = (newUrl) => {
    setPhotoUrlState(newUrl)
  }

  const updateResumeUrl = (newUrl) => {
    setResumeUrlState(newUrl)
  }

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
    <div className='add-student-form'>
      <div className='add-student-form-inputs inputs-1'>
        <InputField ref={fullnameRef} name='Nombre y Apellidos' placeholder='Ej: Juan Pérez Lorca'/>
        
        <div className='add-student-half-width'>
          <InputField ref={phoneRef} name='Nº Teléfono' placeholder='Ej: +34 612 34 56 78'/>
          <InputField ref={emailRef} name='Email' placeholder='Ej: user@mail.com'/>
        </div>
        
        <div className='add-student-half-width'>  
          <InputSelect name='País' options={countryList}/>
          <InputSelect name='Ciudad' options={cityList[0]}/>
        </div>
        
        <div className='add-student-half-width'>   
          <InputRadio name='Traslado' options={move}/>
          <InputRadio name='Presencialidad' options={modalities}/>        
        </div>
      </div>

      <div className='add-student-form-inputs inputs-2'>
        <UploadFile name='Foto de Perfil' title='Subir imagen' 
        supported='.png, .jpg, y .jpeg' 
        accepted='.png, .jpg, .jpeg'
        fileSize='2 MB'
        update={updatePhotoUrl}
        fileType='photo'
        upload />

        <UploadFile name='Documento CV' title='Subir documento PDF' 
        supported='.pdf' 
        accepted='.pdf' 
        fileSize='20 MB' 
        update={updateResumeUrl}
        fileType='resumee'
        upload />

        <InputTags selectedTags={tagsState} addTag={addTag} removeTag={removeTag}/>
      </div>
      
    </div>
  );
}

export default AddStudentForm;
