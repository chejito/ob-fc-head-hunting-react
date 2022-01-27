import React from 'react';
import './studentsTableBody.css'
import TagPills from '../../pure/tagPills/tagPills';


const StudentsTableBody = (props) => {  
  return (
    <tbody className='students-table-body'>
        {props.students.map((student, index) =>(          
          <tr key={ index }>
            <td className='col1' >
              { student.name }
            </td>
            <td className='col2'>
              { student.city }
            </td>
            <td className='col3'>
              { student.country }
            </td>
            <td className='col4'>
              { student.phone }
            </td>
            <td className='col5'>
              { student.email }
            </td>
            <td className='col6'>
              <TagPills tags={student.tags}></TagPills>
            </td>
          </tr>
        ))}
      </tbody>
  );
}

export default StudentsTableBody;
