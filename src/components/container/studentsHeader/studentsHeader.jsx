import React from 'react';
import './studentsHeader.css'
import CompanyName from '../../pure/companyName/companyName';
import UserDisplay from '../../pure/userDisplay/userDisplay';

const StudentsHeader = ({userState, updateUser}) => {
  return (
    <header className='students-header'>
      <CompanyName/>
      <UserDisplay userState={userState} updateUser={updateUser} />
    </header>
  );
}

export default StudentsHeader;
