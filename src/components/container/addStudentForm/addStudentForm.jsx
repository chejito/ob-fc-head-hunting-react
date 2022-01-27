import React from 'react';
import InputField from '../../pure/inputField/inputField';
import './addStudentForm.css'
import { countries } from '../../../data/countries';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputTags from '../../pure/inputTags/inputTags'
import UploadFile from '../../pure/uploadFile/uploadFile';


const AddStudentForm = () => {

  const countryList = []
  const cityList = []
  const modalities = ['Elige una opción', 'Presencial', 'En remoto']
  const move = ['Elige una opción', 'Sí', 'No']

  countries.forEach(country => countryList.push(country.name))
  countries.forEach(country => cityList.push(country.cities))

  return (
    <div className='add-student-form'>
      <div className='add-student-form-inputs inputs-1'>
        <InputField name='Nombre y Apellidos' placeholder='Ej: Juan Pérez Lorca'/>
        
        <div className='add-student-half-width'>
          <InputField name='Nº Teléfono' placeholder='Ej: +34 612 34 56 78'/>
          <InputField name='Email' placeholder='Ej: user@mail.com'/>
        </div>
        
        <div className='add-student-half-width'>  
          <InputSelect name='País' options={countryList}/>
          <InputSelect name='Ciudad' options={cityList[0]}/>
        </div>
        
        <div className='add-student-half-width'>   
          <InputSelect name='Traslado' options={move}/>
          <InputSelect name='Presencialidad' options={modalities}/>        
        </div>
      </div>

      <div className='add-student-form-inputs inputs-2'>
        <UploadFile name='Foto de Perfil' title='Subir imagen' 
        supported='.png, .jpg, y .jpeg' fileSize='2 MB' upload />

        <UploadFile name='Documento CV' title='Subir documento PDF' 
        supported='.pdf' fileSize='20 MB' upload />

        <InputTags tags={[]}/>
      </div>
      
    </div>
  );
}

export default AddStudentForm;
