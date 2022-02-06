import React from 'react';
import './studentsTableBody.css'
import TagPills from '../../pure/tagPills/tagPills';


const StudentsTableBody = ({studentsState, updateStudents}) => { 

  const students = studentsState.studentList
  
  const selectStudent = (index) => {
    updateStudents(
      {
        ...studentsState,
        selectedStudent: students[index]
      }
    )
  } 

  return (
    <tbody className='students-table-body'>
        {students.map((student, index) =>(          
          <tr 
            key={ index } 
            onClick={(e) => {
              e.preventDefault()
              selectStudent(index)}}>
            <td className='col1' >
              { student.fullname }
            </td>
            <td className='col2'>
              { student.city }
            </td>
            <td className='col3'>
              { student.country }
            </td>
            <td className='col4'>
              { student.phoneNumber }
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
