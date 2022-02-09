import React, { useRef, useState } from 'react';
import InputField from '../../pure/inputField/inputField';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputTags from '../../pure/inputTags/inputTags';
import ResumeeField from '../../pure/resumeeField/resumeeField';
import './profileMainSection.css'
import InputRadio from '../../pure/inputRadio/inputRadio';

const ProfileMainSection = ({student, utils}) => {

  const fullnameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')
  const countryRef = useRef('')
  const cityRef = useRef('')
  const mobilityRef = null
  const modalityRef = null

  
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  const countries = Object.keys(utils.countries)
  const cities = utils.countries['España']

  const selectedTags = student.tags

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
    <section className='profile-main-section'>
      <div className='profile-header'>
      <img src={student.photoUrl} alt='Fotografía de perfil del alumno' className='profile-photo'/>
    
      <div className='student'>
        <p className='student-name'>{student.fullname}</p>
        <p className='location'>
          <span className='material-icons-outlined place-icon'>place</span>
          <span className='location-city'>{student.city}</span>
          <span className='location-separator'> | </span>
          <span className='location-country'>{student.country}</span>
        </p>
      </div>
    </div>
          
      <div className='profile-inputs'>
        <InputField ref={fullnameRef} name='Nombre y Apellidos' placeholder='Introduce nombre completo'
        value={student.fullname}/>

        <div className='profile-half-width'>
          <InputField ref={phoneRef} name='Nº Teléfono' placeholder='Introduce teléfono' value={student.phoneNumber}/>
          <InputField ref={emailRef} name='Email' placeholder='Introduce correo electrónico' value={student.email}></InputField>
        </div>
        
        <div className='profile-half-width'>  
          <InputSelect ref={countryRef} name='País' options={countries} 
            value={student.country}
          />
          <InputSelect ref={cityRef} name='Ciudad' options={cities}
            value={student.city}
          />
        </div>
        
        <div className='profile-half-width'>   
          <InputRadio ref={mobilityRef} name='Traslado' options={move} value={student.mobility ? 'Sí': 'No'}/>
          <InputRadio ref={modalityRef} name='Presencialidad' options={modalities} value={student.modality ? 'Presencial' : 'En remoto'}/>
        
        </div>
        <ResumeeField resumeUrl={student.resumeUrl}/>
        
        <InputTags selectedTags={tagsState} addTag={addTag} removeTag={removeTag}/>
      </div>
      
      
    </section>
  );
}

export default ProfileMainSection;
