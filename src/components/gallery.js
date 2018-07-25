import React from 'react';
import Dropdown from './dropdown';
import Picture from './picture';
import RandomButton from './random-button';

export default class Gallery extends React.Component {
  constructor(props) {
      super(props);
  this.state = {
    value: ''
  }
  }
  
  render() {
    const pictures = this.props.pictures;

    return (
      <div>
        <Dropdown onChange={value => this.setState({value})}/>
        <br></br>
        <Picture pictures={pictures} value={this.state.value}/>
        <br></br>
        <RandomButton pictures={pictures} onClick={value => this.setState({value})}/>
      </div>
		)}
}