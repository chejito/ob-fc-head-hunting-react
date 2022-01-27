import React from 'react';
import ProfileMainSection from '../profileMainSection/profileMainSection';
import ProfileResumeeView from '../../pure/profileResumeeView/profileResumeeView';
import './studentProfileMain.css'

const StudentProfileMain = () => {
  return (
    <main className='profile-main'>
      <ProfileMainSection/>
      <ProfileResumeeView/>
    </main>
  );
}

export default StudentProfileMain;
