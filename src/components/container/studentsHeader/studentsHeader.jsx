import React from 'react';
import './studentsHeader.css'
import CompanyName from '../../pure/companyName/companyName';
import UserDisplay from '../../pure/userDisplay/userDisplay';

const StudentsHeader = () => {
  return (
    <header className='students-header'>
      <CompanyName></CompanyName>
      <UserDisplay></UserDisplay>
    </header>
  );
}

export default StudentsHeader;
