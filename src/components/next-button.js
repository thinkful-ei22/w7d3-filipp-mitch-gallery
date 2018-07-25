import React from 'react';

export default function NextButton(props) {
  const currentAnimal = props.pictures.find((picture) => {
    return picture.id === props.value;
  });
  

  const nextAnimal = props.pictures[props.pictures.indexOf(currentAnimal) +1];
  const firstAnimal = props.pictures[0];

  if (!nextAnimal) {
    return <button type="button" name="next-button" id="next-button" newClass="next-button" onClick={e => props.onClick(firstAnimal.id)} >Next Animal</button>;
  } else {
    return <button type="button" name="next-button" id="next-button" newClass="next-button" onClick={e => props.onClick(nextAnimal.id)} >Next Animal</button>;
  }
  
}

