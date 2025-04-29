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
import GeneralizedTable from './Pages/Generalize';


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
 Updated upstream
      <h2>Generalized Table (Fixed Columns)</h2>
      <h2>Generalized Table</h2>
 Stashed changes
      <GeneralizedTable columns={columns} data={data} />
    </div>
  );
} Updated upstream
export default AppGeneralized;
Educationtable-customized
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
  
export default Generalize Stashed changes main
