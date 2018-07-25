import React from 'react';
import Dropdown from './dropdown';
import Picture from './picture';
import RandomButton from './random-button';
import PrevButton from './prev-button';
import NextButton from './next-button';
import VerticalFlip from './vertical-flip';
import HueRotate from './hue-rotate';

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
        <PrevButton pictures={pictures} onClick={value => this.setState({value})} value={this.state.value}/>
        <RandomButton pictures={pictures} onClick={value => this.setState({value})}/>
        <NextButton pictures={pictures} onClick={value => this.setState({value})} value={this.state.value} />
        <br></br>
        <VerticalFlip onClick={() => this.changeFlip()} />
        <HueRotate onClick={() => this.rotateHue()} />
      </div>
    );}
}