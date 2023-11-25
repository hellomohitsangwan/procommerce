import React from 'react';

const Slider = ({ selectedValue, onSelectValue }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginRight: '10px',
  };

  const inputStyle = {
    width: '200px',
  };

  const handleSliderChange = (event) => {
    onSelectValue(parseInt(event.target.value, 10));
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>Products :</label>
      <input
        type="range"
        min="1"
        max="10" 
        value={selectedValue}
        onChange={handleSliderChange}
        style={inputStyle}
      />
      <span>{selectedValue}</span>
    </div>
  );
};

export default Slider;
