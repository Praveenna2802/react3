import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
    setSelectedColor(null);
  };

  return (
    <div>
      <button onClick={toggleColorList}>
        {showColorList ? 'Hide Color List' : 'Pick a color'}
      </button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color"> {selectedColor}</div>
      )}
    </div>
  );
};

export default ColorPicker;
