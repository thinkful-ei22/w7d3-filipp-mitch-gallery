import React from 'react';

export default function Picture(props) {
  const animal = props.pictures.find((picture) => {
    return picture.id === props.value;
  });

  return <img id={animal.id} src={animal.src} alt={animal.alt} 
    style={{ filter: `hue-rotate(${props.hue}deg)`}} className={props.flipped ? 'flip': ''}/>;
}