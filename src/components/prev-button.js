import React from 'react';

export default function PrevButton(props) {
  const currentAnimal = props.pictures.find((picture) => {
    return picture.id === props.value
  })
  

  const prevAnimal = props.pictures[props.pictures.indexOf(currentAnimal)-1]
  const lastAnimal = props.pictures[props.pictures.length -1 ]

  if (!prevAnimal) {
    return <button type="button" name="prev-button" id="prev-button" newClass="prev-button" onClick={e => props.onClick(lastAnimal.id)} >Previous Animal</button>
  } else {
    return <button type="button" name="prev-button" id="prev-button" newClass="prev-button" onClick={e => props.onClick(prevAnimal.id)} >Previous Animal</button>
  }
  
}