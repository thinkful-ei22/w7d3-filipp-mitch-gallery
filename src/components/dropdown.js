import React from 'react';

export default function Dropdown(props) {

  const optionItems = props.pictures.map((picture) =>
    <option key={props.pictures.indexOf(picture)} value={picture.id}>{picture.id}</option>);

  return (
    <div>
      <label htmlFor="dropdown">Choose an animal: </label>
      <select className="dropdown" id="dropdown" value={props.value} 
        onChange={e => props.onChange(e.target.value)}>
        {optionItems}
      </select>
    </div>
  );
}
