// AppGeneralized.jsx
import React from 'react';
import GeneralizedTable from './Pages/Generalize'; // Importing the Generalized Table component

function AppGeneralized() {
  const columns = [
    { label: 'Name', field: 'name' },
    { label: 'Age', field: 'age' },
    { label: 'City', field: 'city' },
  ];

  const data = [
    { name: 'Ali', age: 22, city: 'Lahore' },
    { name: 'Sara', age: 25, city: 'Karachi' },
    { name: 'Zain', age: 20, city: 'Islamabad' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Generalized Table (Fixed Columns)</h2>
      <GeneralizedTable columns={columns} data={data} />
    </div>
  );
}

export default AppGeneralized;
const columns = [
  { label: 'Name', field: 'name' },
  { label: 'Age', field: 'age' },
  { label: 'City', field: 'city' },
];

const data = [
  { name: 'Ali', age: 22, city: 'Lahore' },
  { name: 'Sara', age: 25, city: 'Karachi' },
];

<DynamicTable columns={columns} data={data} />
