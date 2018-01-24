import React from 'react';
import {NavBar} from '../components/navBar'

export class NavBarContainer extends React.Component {
 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
   toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
			<NavBar onToggle={this.toggle}  isOpen={this.state.isOpen}/>
    	)
  }
}

