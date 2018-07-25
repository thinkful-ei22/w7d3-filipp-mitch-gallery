import React from 'react';

export default function HueRotate(props) {

  return (
    <button type="button" name="hue-rotate-button"
      id="hue-rotate-button"
      onClick={() => props.onClick()}>
      Rotate Hue
    </button>
  );
}