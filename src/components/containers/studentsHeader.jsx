import React from 'react';
import '../../styles/studentsHeader.css'
import CompanyName from '../companyName';
import UserDisplay from '../userDisplay';

const StudentsHeader = () => {
  return (
    <header className='students-header'>
      <CompanyName></CompanyName>
      <UserDisplay></UserDisplay>
    </header>
  );
}

export default StudentsHeader;
