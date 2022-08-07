import React from 'react';

let ColorBlock = (props) => {
  return (
    
    <div className="color-block" style={{backgroundColor: props.color}}>
        
        <h4>{props.color}</h4>
    </div>
    
  );
}

export default ColorBlock;