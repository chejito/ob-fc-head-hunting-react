import React from 'react';
import './profileResumeeView.css'

const ProfileResumeeView = ({resumeUrl}) => {
  
  return (
    <iframe src={resumeUrl} frameBorder='0' title='pdf-viewer' className='pdf-viewer'></iframe>
  );
}

export default ProfileResumeeView;
