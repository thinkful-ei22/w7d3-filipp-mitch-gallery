import React from 'react';

export default function CycleButton(props) {
  const currentAnimal = props.pictures.find((picture) => {
    return picture.id === props.value;
  });

  let upAnimal;
  let downAnimal;
  
  if(props.name==='prev-button'){
    upAnimal = props.pictures[props.pictures.indexOf(currentAnimal)-1];
    downAnimal = props.pictures[props.pictures.length -1 ];
  } else if (props.name==='next-button'){
    upAnimal = props.pictures[props.pictures.indexOf(currentAnimal) +1];
    downAnimal = props.pictures[0];
  }

  if (!upAnimal) {
    return <button type="button" name={props.name} id={props.name} 
      className={props.name} onClick={() => props.onClick(downAnimal.id)}>
      {props.text}</button>;
  } else {
    return <button type="button" name={props.name} id={props.name} 
      className={props.name} onClick={() => props.onClick(upAnimal.id)}>
      {props.text}</button>;
  }
  
}