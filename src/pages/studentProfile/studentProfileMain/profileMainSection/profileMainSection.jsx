import React from 'react';
import InputField from '../../../../components/inputField/inputField';
import InputSelect from '../../../../components/inputSelect/inputSelect';
import InputTags from '../../../../components/inputTags/inputTags';
import './profileMainSection.css'
import { countries } from '../../../../data/countries';
import ResumeeField from '../../../../components/resumeeField/resumeeField';
import img from '../../../../assets/images/bunny-profile.jpg'
import { student } from '../../../../data/exampleStudent'

const ProfileMainSection = () => {

  const countryList = []
  const cityList = []
  const modalities = ['Presencial', 'En remoto']
  const move = ['Sí', 'No']

  console.log(student)

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
        <InputField name='Nombre y Apellidos' placeholder='Introduce nombre completo'
        value={student.fullName}/>

        <div className='profile-half-width'>
          <InputField name='Nº Teléfono' placeholder='Introduce teléfono' value={student.phoneNumber}/>
          <InputField name='Email' placeholder='Introduce correo electrónico' value={student.email}></InputField>
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
        
        <InputTags/>
      </div>
      
      
    </section>
  );
}

export default ProfileMainSection;
