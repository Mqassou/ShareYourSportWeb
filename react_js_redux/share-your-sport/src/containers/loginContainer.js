import React from 'react';
import ReactDOM from 'react-dom';

import {HomeContainer} from './homeContainer';
import {Login} from '../components/login'
import '../styles/login.css';

//external ressources
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
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
    				loggedIn:false,
    				modal:false
    		};


    this.connexion = this.connexion.bind(this);
    this.onChangeConnexion = this.onChangeConnexion.bind(this);

    this.creerCompte = this.creerCompte.bind(this);
    this.onChangeCreerCompte = this.onChangeCreerCompte.bind(this);

    this.toggle = this.toggle.bind(this);
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

 onChangeConnexion(newValue)
 {
	this.setState({
      connexion: Object.assign({},this.state.connexion,newValue.connexion)
    });
 }

  
   creerCompte()
  {
  const self=this;

   axios.post('http://localhost:8080/createUser', {
      pseudo:this.state.creerCompte.pseudo,
      email: this.state.creerCompte.email,
      motdepasse: this.state.creerCompte.motdepasse
    })
    .then(function (response) {
      console.log(response);
      if( response.data !=false)
      {
        console.log('compte crée');
         self.setState({modal:false})
      }
    
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

 onChangeCreerCompte(newValue)
 {
  this.setState({
      creerCompte: Object.assign({},this.state.creerCompte,newValue.creerCompte)
    });
 }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
  	if(this.state.loggedIn)
  	{
  		
  		return <Redirect to="/home"/>
  	}
  	else
  	{
  		 return <Login modal={this.state.modal} onToggle={this.toggle} onChangeCreerCompte={this.onChangeCreerCompte} onChangeConnexion={this.onChangeConnexion} onConnexion={this.connexion}  onCreerCompte={this.creerCompte}/>
  	}
   
  }
}
 