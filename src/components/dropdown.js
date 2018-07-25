import React from 'react';

export default function Dropdown(props) {
	return (
		<div>
			<label for="dropdown">Choose an animal</label>
			
			<select newClass="dropdown" id="dropdown" onChange={e => props.onChange(e.target.value)}>
				<option value="">--Please choose an option--</option>
				<option value="Cat">Cat</option>
				<option value="Dog">Dog</option>
				<option value="Horse">Horse</option>
				<option value="Shark">Shark</option>
        <option value="Camel">Camel</option>
        <option value="Gorilla">Gorilla</option>
        <option value="Penguin">Penguin</option>
        <option value="Bear">Bear</option>
        <option value="Llama">Llama</option>
        <option value="Goat">Goat</option>
			</select>
		</div>
	)
}