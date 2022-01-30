import React, { useRef } from 'react';
import InputField from '../../pure/inputField/inputField';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputTags from '../../pure/inputTags/inputTags';
import ResumeeField from '../../pure/resumeeField/resumeeField';
import './profileMainSection.css'
import img from '../../../assets/images/bunny-profile.jpg'
import { student } from '../../../data/exampleStudent'
import { countries } from '../../../data/countries';

const ProfileMainSection = () => {

  const fullnameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')

  const countryList = []
  const cityList = []
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  countries.forEach(country => countryList.push(country.name))
  countries.forEach(country => cityList.push(country.cities))

  return (
    <section className='profile-main-section'>
      <div className='profile-header'>
      <img src={img} alt='Fotografía de perfil del alumno' className='profile-photo'/>
    
      <div className='student'>
        <p className='student-name'>{student.fullName}</p>
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
        value={student.fullName}/>

        <div className='profile-half-width'>
          <InputField ref={phoneRef} name='Nº Teléfono' placeholder='Introduce teléfono' value={student.phoneNumber}/>
          <InputField ref={emailRef} name='Email' placeholder='Introduce correo electrónico' value={student.email}></InputField>
        </div>
        
        <div className='profile-half-width'>  
          <InputSelect name='País' options={countryList} 
            value={student.country}
          />
          <InputSelect name='Ciudad' options={cityList[0]}
            value={student.city}
          />
        </div>
        
        <div className='profile-half-width'>   
          <InputSelect name='Traslado' options={move}/>
          <InputSelect name='Presencialidad' options={modalities}/>
        
        </div>
        <ResumeeField/>
        
        <InputTags tags={['html&css', 'react', 'angular']}/>
      </div>
      
      
    </section>
  );
}

export default ProfileMainSection;
