import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'teal',
    'brown',
    'gray',
    'cyan',
    'magenta',
  ];

  return (
    <div className="app-container">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
