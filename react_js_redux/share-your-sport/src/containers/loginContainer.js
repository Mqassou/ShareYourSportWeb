import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from '../components/login'

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
 
  }
   creerCompte()
  {
  	
  }

  render() {
    return <Login onChangeConnexion={this.handleChangeConnexion} onConnexion={this.connexion}  onCreerCompte={this.creerCompte}/>
  }
}

