import React from 'react';

const Search = ({ searchTerm, onSearchTermChange }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginRight: '10px',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
    marginRight: '10px',
  };


  const handleInputChange = (event) => {
    onSearchTermChange(event.target.value);
  };


  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Search Term:</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        style={inputStyle}
      />
    </div>
  );
};

export default Search;
