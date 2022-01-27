import React from 'react';
import './tagPills.css'

const TagPills = (props) => {

  const tags = []

  if (props.tags.length > 2){
    tags.push(props.tags[0])
    tags.push(props.tags[1])
    tags.push(`+ ${props.tags.length - 2}`)
  } else { 
    props.tags.forEach(tag => {
      tags.push(tag)
    })
  }

  return (
    <div className='tag-pills'>
      {tags.map((tag, index) => (
        <span className='tag-pill' key={ index }>
          { tag }
        </span>
      ))}    
    </div>
    
  );
}

export default TagPills;
