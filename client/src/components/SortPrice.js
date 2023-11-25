// import React from 'react';
// import styles from './sp.css';

// const SortPrice = ({ selectedFilter, onSelectFilter }) => {
//   const options = ['Lowest', 'Highest'];

//   const handleChange = (event) => {
//     onSelectFilter(event.target.value);
//   };

//   return (
//     <div className={styles.container}>
//       <label className={styles.label}>Filter Price By : </label>
//       <select
//         className={styles.dropdown}
//         value={selectedFilter}
//         onChange={handleChange}
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SortPrice;


// Updated SortPrice component with inline styles

import React from 'react';

const SortPrice = ({ selectedFilter, onSelectFilter }) => {
  const containerStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    fontSize: '20px',
    marginRight: '10px',
  };

  const selectStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  };

  const handleSelectChange = (event) => {
    onSelectFilter(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Sort By:</label>
      <select
        value={selectedFilter}
        onChange={handleSelectChange}
        style={selectStyle}
      >
        <option value="lowestPrice">Lowest Price</option>
        <option value="highestPrice">Highest Price</option>
      </select>
    </div>
  );
};

export default SortPrice;
