import React, {useRef, useState} from 'react';
import InputField from '../../pure/inputField/inputField';
import './addStudentMain.css'
import './addStudentForm.css'
import { countries } from '../../../data/countries';
import InputSelect from '../../pure/inputSelect/inputSelect';
import InputRadio from '../../pure/inputRadio/inputRadio';
import UploadFile from '../../pure/uploadFile/uploadFile';
import InputTags from '../../pure/inputTags/inputTags';
import RoundedButton from '../../pure/roundedButton/roundedButton';
import { createStudent } from '../../../services/StudentsService'


const AddStudentMain = ({closeModal, userState}) => {

  const fullnameRef = useRef('')
  const phoneRef = useRef('')
  const emailRef = useRef('')
  const countryRef = useRef('')
  const cityRef = useRef('')
  const modalityRef = useRef(null)
  const mobilityRef = useRef(null)

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
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  const updatePhotoUrl = (newUrl) => {
    setPhotoUrlState(newUrl)
  }

  const updateResumeUrl = (newUrl) => {
    setResumeUrlState(newUrl)
  }

  const unlockSaveButton = () => {
    setButtonDisabled(false)
  }

  const lockSaveButton = () => {
    setButtonDisabled(true)
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

  const saveStudent = (e) => {
    e.preventDefault()
    let token = sessionStorage.getItem('token')

    const student = {
      fullname: fullnameRef.current.value,
      phoneNumber: phoneRef.current.value,
      email: emailRef.current.value,
      country: countryRef.current.value,
      city: cityRef.current.value,
      mobility: mobilityRef.current.value === 'Sí' ? true : false ,
      modality: modalityRef.current.value === 'Presencial' ? true : false,
      photoUrl: photoUrlState,
      resumeeUrl: resumeUrlState,
      username: userState.user.username,
      tags: tagsState
    }


    createStudent(student, token)
      .then((response) => {
        alert(`${response.data.message}`)
      })
      .catch((error) => {
        alert(`Error while retrieving the students: ${error}`)
        console.log(error)
      })

    lockSaveButton()
    closeModal()    

  }

  const checkValidity = (e) => {
    e.preventDefault()
    if (
      fullnameRef !== '' &&
      phoneRef !== '' &&
      emailRef !== '' &&
      countryRef !== '' &&
      cityRef !== '' &&
      modalityRef !== null &&
      mobilityRef !== null &&
      photoUrlState !== '' &&
      resumeUrlState !== '' &&
      tagsState.length !== 0
    ) {
      unlockSaveButton()
    }
  }


  return (
    <form onSubmit={saveStudent} className='add-student-main'>
      <div className='add-student-form-header'>
        <p>Nuevo Alumno</p>
        <span className='material-icons close-icon' 
          onClick={(e) => {
            e.preventDefault()
            closeModal()
          }}>
          close
        </span>
      </div>
      <div className='add-student-fields'>
        <div className='add-student-form-inputs inputs-1'>
          <InputField ref={fullnameRef} name='Nombre y Apellidos' placeholder='Ej: Juan Pérez Lorca'/>
          
          <div className='add-student-half-width'>
            <InputField 
              ref={phoneRef} 
              name='Nº Teléfono' 
              placeholder='Ej: +34 612 34 56 78'
              onChange={checkValidity}/>
            <InputField 
              ref={emailRef} 
              name='Email' 
              placeholder='Ej: user@mail.com'
              onChange={checkValidity}/>
          </div>
          
          <div className='add-student-half-width'>  
            <InputSelect 
              ref={countryRef} 
              name='País' 
              options={countryList} 
              onChange={checkValidity}/>
            <InputSelect 
              ref={cityRef} 
              name='Ciudad' 
              options={cityList[0]} 
              onChange={checkValidity}/>
          </div>
          
          <div className='add-student-half-width'>   
            <InputRadio 
              ref={mobilityRef} 
              name='Traslado' 
              options={move} 
              onChange={checkValidity}/>
            <InputRadio 
              ref={modalityRef} 
              name='Presencialidad' 
              options={modalities} 
              onChange={checkValidity}/>        
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
      <div className='add-student-buttons'>
        <button className='rounded-button save-button' type='submit' 
        disabled={buttonDisabled}
        style={ buttonDisabled ? {} : { backgroundColor: '#31d3a3' }}
        >
          Guardar
        </button>
        <RoundedButton title='Cancelar' onClick={closeModal}/>
      </div>
      
    </form>
  );
}

export default AddStudentMain;
