import React from 'react';
import Dropdown from './dropdown';
import Picture from './picture';
import RandomButton from './random-button';
import CSSButton from './cssbutton';
import CycleButton from './cycle-button';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Cat',
      flipped: false,
      hue: 0
    };
  }

  changeFlip() {
    const currentState = this.state.flipped;
    this.setState({flipped: !currentState});
  }

  rotateHue() {
    const currentHue = this.state.hue;
    if (currentHue === 270) {
      this.setState({hue: 0});
    } else {
      this.setState({hue: currentHue + 90});
    }
  } 

  
  render() {
    const pictures = this.props.pictures;

    return (
      <div>
        <Dropdown pictures={pictures} value={this.state.value} onChange={value => this.setState({value})}/>
        <br></br>
        <Picture pictures={pictures} value={this.state.value} flipped={this.state.flipped} hue={this.state.hue}/>
        <br></br>
        <CycleButton pictures={pictures} name="prev-button" text="Previous" onClick={value => this.setState({value})} value={this.state.value} />
        <RandomButton pictures={pictures} onClick={value => this.setState({value})}/>
        <CycleButton pictures={pictures} name="next-button" text="Next" onClick={value => this.setState({value})} value={this.state.value} />
        <br></br>
        <CSSButton name="flip-button" text="Vertical Flip" onClick={() => this.changeFlip()} />
        <CSSButton name="hue-button" text="Rotate Hue" onClick={() => this.rotateHue()} />
      </div>
    );}
}