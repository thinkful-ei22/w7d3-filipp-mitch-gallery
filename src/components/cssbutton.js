import React from 'react';

export default function CSSButton(props) {
    
  return (
    <button type="button" name={props.name} 
      id ={props.name}
      onClick={() => props.onClick()}>
      {props.text}
    </button>
  );
}