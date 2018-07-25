import React from 'react';

export default function VerticalFlip(props) {
    
  return (
    <button type="button" name="vertical-flip-button" 
      id ="vertical-flip-button"
      onClick={() => props.onClick()}>
      Vertical Flip
    </button>
  );
}