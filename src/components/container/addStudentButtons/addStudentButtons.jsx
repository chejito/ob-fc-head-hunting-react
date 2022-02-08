import React from 'react';
import RoundedButton from '../../pure/roundedButton/roundedButton';
import './addStudentButtons.css'

const AddStudentButtonBar = ({closeModal}) => {
  return (
    <div className='add-student-buttons'>
      <RoundedButton title='Guardar' disable/>
      <RoundedButton title='Cancelar' onClick={closeModal}/>
    </div>
  );
}

export default AddStudentButtonBar;
