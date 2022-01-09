import React from 'react';
import './studentsHeader.css'
import CompanyName from '../../../components/companyName/companyName';
import UserDisplay from '../../../components/userDisplay/userDisplay';

const StudentsHeader = () => {
  return (
    <header className='students-header'>
      <CompanyName></CompanyName>
      <UserDisplay></UserDisplay>
    </header>
  );
}

export default StudentsHeader;
