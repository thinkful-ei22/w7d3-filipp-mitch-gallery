import React from 'react';

export default function Dropdown(props) {
	return (
		<div>
			<label for="dropdown">Choose an animal</label>
			
			<select newClass="dropdown" id="dropdown" onChange={e => props.onChange(e.target.value)}>
				<option value="">--Please choose an option--</option>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="horse">Horse</option>
				<option value="shark">Shark</option>
			</select>
		</div>
	)
}