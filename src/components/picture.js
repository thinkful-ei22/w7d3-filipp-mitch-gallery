import React from 'react';

export default function Picture(props) {
	const animal = props.pictures.find((picture) => {
		return picture.id === props.value;
	})

	if (!animal) {
		return <p>No Animal picked.</p>
	} else {
		return <img id={animal.id} src={animal.src} alt={animal.alt}/>
	}
	
}