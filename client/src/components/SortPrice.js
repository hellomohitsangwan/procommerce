import React from 'react';
import styles from './sp.css';

const SortPrice = ({ selectedFilter, onSelectFilter }) => {
  const options = ['Lowest', 'Highest'];

  const handleChange = (event) => {
    onSelectFilter(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Filter Price By : </label>
      <select
        className={styles.dropdown}
        value={selectedFilter}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortPrice;
