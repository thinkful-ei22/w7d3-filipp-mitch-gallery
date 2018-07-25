import React from 'react';

export default function Picture(props) {
	const animal = props.pictures.find((id) => {
		id = props.value;
		return <img id={animal.id} src={animal.src} alt={animal.alt}/>
	})
	
	return (
		{animal}
	)
}