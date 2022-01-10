import React from 'react';
import './roundedButton.css'

const RoundedButton = (props) => {

  return (
    <div className={'rounded-button'} disabled={props.disable}>
      {props.upload ?
       <span className='material-icons-outlined upload-icon'>
        cloud_upload
      </span> : ''}
      <p>{props.title}</p>
    </div>
  );
}

export default RoundedButton;
