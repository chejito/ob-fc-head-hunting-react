import React from 'react';
import '../styles/userDisplay.css'

const UserDisplay = (props) => {

  const photo = props.photo == null ? 'NA' : props.photo
  const username = props.username == null ? 'UserName' : props.username

  return (
    <div className='username-container'>
      <div className='username-image'>{photo}</div>
      <div className='username-user'>{username}</div>
      <span class="material-icons username-button">
        expand_more
      </span>
    </div>
  );
}

export default UserDisplay;
