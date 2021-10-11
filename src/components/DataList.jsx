import React from 'react';

const DataList = ({data}) => {
  return (
    <ul className="data">
      <li className="data__item">Name: <span style={{fontWeight: '600'}}>{data.name}</span></li>
      <li className="data__item">Surname: <span style={{fontWeight: '600'}}>{data.surname}</span></li>
      <li className="data__item">Email: <span style={{fontWeight: '600'}}>{data.email}</span></li>
      <li className="data__item">City: <span style={{fontWeight: '600'}}>{data.city}</span></li>
      <li className="data__item">Street: <span style={{fontWeight: '600'}}>{data.street}</span></li>
      <li className="data__item">House number: <span style={{fontWeight: '600'}}>{data.houseNumber}</span></li>
    </ul>
  );
};

export default DataList;
