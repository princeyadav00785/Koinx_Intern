import React from 'react';

const CircularChart = () => {
  const containerStyle = {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
  };

  const element1Style = {
    width: '50%',
    height: '100%',
    backgroundColor: '#3498db',
    transform: 'rotate(0deg)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease-in-out',
  };

  const element2Style = {
    width: '50%',
    height: '100%',
    backgroundColor: '#e74c3c',
    transform: 'rotate(180deg)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <div className="relative" style={containerStyle}>
      <div className="absolute" style={element1Style}></div>
      <div className="absolute" style={element2Style}></div>
    </div>
  );
};

export default CircularChart;
