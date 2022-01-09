import React from 'react';
import './studentsTableBody.css'
import { students } from '../../../../../../data/students';


const Studentstablebody = () => {
  return (
    <tbody className='students-table-body'>
        {students.map((student, index) =>(
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
              { student.tags }
            </td>
          </tr>
        ))}
      </tbody>
  );
}

export default Studentstablebody;
