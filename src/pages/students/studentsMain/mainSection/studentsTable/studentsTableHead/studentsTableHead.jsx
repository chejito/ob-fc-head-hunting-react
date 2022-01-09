import React from 'react';
import './studentsTableHead.css'

const StudentsTableHead = () => {

  const headColumns = ['nombre', 'ciudad', 'país', 'teléfono', 
  'correo electrónico', 'etiquetas']

  return (
    <thead className='students-table-head'>
      <tr>
        {headColumns.map((column, index) => (
          index === 4 ? <th className={'col' + (index + 1)} key={index}>{column}</th> :
          <th className={'col' + (index + 1)} key={index}>{column}
            <span className='material-icons sort-icon'>
              sync_alt
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default StudentsTableHead;
