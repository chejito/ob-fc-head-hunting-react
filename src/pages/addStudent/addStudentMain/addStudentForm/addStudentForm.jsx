import React from 'react';
import InputField from '../../../../components/inputField/inputField';
import './addStudentForm.css'
import { countries } from '../../../../data/countries';
import InputSelect from '../../../../components/inputSelect/inputSelect';


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
        
      </div>
      
    </div>
  );
}

export default AddStudentForm;
