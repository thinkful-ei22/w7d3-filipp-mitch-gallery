import React from 'react';
import Dropdown from './dropdown';
import Picture from './picture';
import RandomButton from './random-button';
import PrevButton from './prev-button';
import NextButton from './next-button';
import VerticalFlip from './vertical-flip';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Cat',
      flipped: false,
      hueRotate: 0
    };
  }

  changeFlip() {
    const currentState = this.state.flipped;
    this.setState({flipped: !currentState});
  }

  rotateHue() {
    const currentHue = this.state.hueRotate;
    this.setState({hueRotate: currentHue + 90});
  }

  addDeg() {
    const currentHue = this.state.hueRotate;
    this.setState({hueRotate: `${currentHue}deg`});
  }
  
  render() {
    const pictures = this.props.pictures;

    return (
      <div>
        <Dropdown pictures={pictures} value={this.state.value} onChange={value => this.setState({value})}/>
        <br></br>
        <Picture pictures={pictures} value={this.state.value} flipped={this.state.flipped}/>
        <br></br>
        <PrevButton pictures={pictures} onClick={value => this.setState({value})} value={this.state.value}/>
        <RandomButton pictures={pictures} onClick={value => this.setState({value})}/>
        <NextButton pictures={pictures} onClick={value => this.setState({value})} value={this.state.value} />
        <br></br>
        <VerticalFlip onClick={() => this.changeFlip(this.state.flipped)} />
      </div>
    );}
}