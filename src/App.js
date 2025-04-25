// AppDynamic.jsx
import React from 'react';
import DynamicTable from './Pages/Dynamic'; // Importing the Dynamic Table component

function AppDynamic() {
  const dynamicData = [
    { name: 'Hamza', age: 30, city: 'Peshawar' },
    { name: 'Nida', age: 28, city: 'Multan' },
    { name: 'Usman', age: 23, city: 'Quetta' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dynamic Table (Dynamic Data)</h2>
      <DynamicTable data={dynamicData} />
    </div>
  );
}

export default AppDynamic;
