import React, { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  //Set initial state for the colors array
  let [colors, setColors]  = useState(['violet', 'indigo', 'blue', 'turquoise', 'green', 'greenyellow', 'yellow', 'orange', 'red']);
  let colorMap = colors.map((color, i) => <ColorBlock key={color} color={color} />);
  const addColor = (newColor) => setColors([...colors, newColor]); 
  //Function to clear the colors array
  const clearColors = () => setColors([]);
  return (
    <div className="App">
      <div className="colormap">
        {colorMap}
      </div>
      <div className="inputs">
        <ColorForm addColor={addColor} />
        <button onClick={clearColors}>Clear Colors</button> 
      </div>
    </div>
  );
}

export default App;
