import React from 'react';
import './studentsAside.css'
import StudentsAsideForm from '../studentsAsideForm/studentsAsideForm';

const StudentsAside = () => {
  return (
    <aside  className='students-aside'>
      <header className='students-aside-header'>
        <p>Filtros de búsqueda</p>
        <span className='material-icons-outlined delete-icon'>
          delete
        </span>
      </header>      
      <StudentsAsideForm></StudentsAsideForm>
    </aside>
  );
}

export default StudentsAside;
