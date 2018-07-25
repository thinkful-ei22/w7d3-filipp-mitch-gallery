import React from 'react';

export default function Dropdown(props) {

  const optionItems = props.pictures.map((picture) =>
    <option value={picture.id}>{picture.id}</option>);

  return (
    <div>
      <label for="dropdown">Choose an animal: </label>
      <select newClass="dropdown" id="dropdown" value={props.value} 
        onChange={e => props.onChange(e.target.value)}>
        {optionItems}
      </select>
    </div>
  );
}
