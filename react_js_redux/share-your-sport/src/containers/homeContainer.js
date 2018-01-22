import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from '../components/home'
import {NavBarContainer} from './navBarContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';


export class HomeContainer extends React.Component {
 constructor(props) {
    super(props);

  //  this.state = { }
  }


  render() {
    return (
      <div>
      <NavBarContainer/>
			<Home/>
      </div>
    	)
  }
}

