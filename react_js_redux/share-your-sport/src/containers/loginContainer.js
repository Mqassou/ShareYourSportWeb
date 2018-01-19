import React from 'react';
import ReactDOM from 'react-dom';
import {HomeContainer} from './homeContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Login} from '../components/login'
import axios from 'axios';


export class LoginContainer extends React.Component {
 constructor(props) {
    super(props);

    this.state = { 
    				connexion: {
    				 email:'', 
    				 motdepasse:''
    				},
    				creerCompte: {
    				 pseudo:'', 
    				 email:'', 
    				 motdepasse:''
    				},
    				loggedIn:false
    		};


    this.connexion = this.connexion.bind(this);
    this.handleChangeConnexion = this.handleChangeConnexion.bind(this);

    this.creerCompte = this.creerCompte.bind(this);
  }


 handleChangeConnexion(newValue)
 {
	this.setState({
      connexion: Object.assign({},this.state.connexion,newValue.connexion)
    });
 }

  connexion()
  {
  	const self=this;

	 axios.post('http://localhost:8080/login', {
	    email: this.state.connexion.email,
	    motdepasse: this.state.connexion.motdepasse
	  })
	  .then(function (response) {
	    console.log(response);
	    if( response.data !=false)
	    {
	    	self.setState({loggedIn:true})
	    }
	  
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }
   creerCompte()
  {
  	
  }

  render() {
  	if(this.state.loggedIn)
  	{
  		
  		return <HomeContainer/>
  	}
  	else
  	{
  		 return <Login onChangeConnexion={this.handleChangeConnexion} onConnexion={this.connexion}  onCreerCompte={this.creerCompte}/>
  	}
   
  }
}
 