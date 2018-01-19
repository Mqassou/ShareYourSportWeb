import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../styles/login.css';
export class Login extends React.Component {

 constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
handleChange(e)
{
	e.target.name==='email'?this.props.onChangeConnexion({connexion:{email:e.target.value}}):this.props.onChangeConnexion({connexion:{motdepasse:e.target.value}});
}

  render() {
    return (
    	<div className="container">
		 <Form >
			 <h1>ShareYourSport  </h1>
		        <FormGroup>
		          <Label for="exampleEmail">Email</Label>
		          <Input type="email" onChange={this.handleChange}  name="email" placeholder="with a placeholder" />
		        </FormGroup>
		        <FormGroup>
		          <Label for="examplePassword">Password</Label>
		          <Input type="password" onChange={this.handleChange} name="password"  placeholder="password placeholder" />
		        </FormGroup>

		         <Button onClick={this.props.onConnexion} color="primary">Connexion </Button>  <Button color="primary">Créer un compte</Button>
		 </Form>
	    </div>


    	)
  }
}

