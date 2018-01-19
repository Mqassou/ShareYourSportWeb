import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from '../components/home'
import {LoginContainer} from './loginContainer';
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
			<Router>
				

	  			 <div>
	  			 <Home/>
		  			  <li><Link to="/home">Home</Link></li>
		  			 
					  <Route path='/home' component={HomeContainer}/>
				 </div>
			</Router>
    	

    	)
  }
}

