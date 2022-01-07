import React from 'react';

const CompanyName = () => {
  return (
    <h1 className='company-name' style={{
      width: '297px',
      height: '28px',
      fontSize: '24px',
      fontWeight: '400',
      color: 'var(--primary-font-color)'
    }}>
      <span>
        OpenBootcamp
      </span>
      <span style={{
        marginLeft: '8px',
        fontWeight: '800',
        color: 'var(--primary-color)'
      }}>| Alumnos</span>
    </h1>
  );
}

export default CompanyName;
