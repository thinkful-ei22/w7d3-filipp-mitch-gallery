import React from 'react';

export default function RandomButton(props) {
  const random = props.pictures[Math.floor(Math.random()*props.pictures.length)];

  return (
    <button type="button" name="randomize" id="randomize" 
      className="randomize" onClick={() => props.onClick(random.id)}>
      Randomize!
    </button>
  );
}