import React from 'react';
import RoundedButton from '../../../../components/roundedButton/roundedButton';
import './addStudentButtons.css'

const AddStudentButtonBar = () => {
  return (
    <div className='add-student-buttons'>
      <RoundedButton title='Guardar' disable/>
      <RoundedButton title='Cancelar'/>
    </div>
  );
}

export default AddStudentButtonBar;
