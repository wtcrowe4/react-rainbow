import React, { useState } from 'react';

let ColorForm = (props) => {
  let [color, setColor] = useState('');
  //Checking if the color is valid
  const isValidColor = (color) => {
    var v = new Option().style
    v.color = color;
    return v.color !== '';
    }
  //Change handler for the color input
  let handleChange = (e) => {
    setColor(e.target.value);  
  }
  //Submit handler for the color input
  let handleSubmit = (e) => {
    e.preventDefault();
    isValidColor(color) ? props.addColor(color) : alert('Invalid color');
    setColor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} onChange={handleChange} />
      <input type="submit" value="Add Color" />
    </form>
  );
}

export default ColorForm;