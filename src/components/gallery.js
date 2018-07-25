import React from 'react';
import Dropdown from './dropdown';
import Picture from './picture';

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
        <Picture pictures={pictures}/>
      </div>
		)}
}