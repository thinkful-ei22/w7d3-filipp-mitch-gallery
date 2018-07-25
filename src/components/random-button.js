import React from 'react';

export default function RandomButton(props) {
  const random = props.pictures[Math.floor(Math.random()*props.pictures.length)]

  return (
    <button type="button" name="randomize" id="randomize" newClass="randomize" onClick={e => props.onClick(random.id)}>
    Randomize!
    </button>
  );
}