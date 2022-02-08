import React from 'react';
import './roundedButton.css'

const RoundedButton = ({disable, title, upload, onClick}) => {

  return (
    <button className={'rounded-button'} disabled={disable} onClick={onClick}>
      {upload ?
       <span className='material-icons-outlined upload-icon'>
        cloud_upload
      </span> : ''}
      <p>{title}</p>
    </button>
  );
}

export default RoundedButton;
