import React from 'react';
import './userDisplay.css'

const UserDisplay = ({userState, updateUser}) => {

  const user = userState.user

  const capitals = user == null ? 'NA' : user.username
  const username = user == null ? 'UserName' : user.username

  return (
    <div className='username-container'>
      <div className='username-image'>{capitals}</div>
      <div className='username-user'>{username}</div>
      <span className='material-icons username-button'>
        expand_more
      </span>
    </div>
  );
}

export default UserDisplay;
