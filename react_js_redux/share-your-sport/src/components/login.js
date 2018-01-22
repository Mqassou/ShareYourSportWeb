import React from 'react';
import PropTypes from 'prop-types';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter } from 'reactstrap';

export class Login extends React.Component {

 constructor(props) {
    super(props);
    this.handleChangeConnexion = this.handleChangeConnexion.bind(this);
    this.handleChangeCreeCompte = this.handleChangeCreeCompte.bind(this);
  }

handleChangeConnexion(e)
{
this.props.onChangeConnexion({connexion:{[e.target.name]:e.target.value}});
}

handleChangeCreeCompte(e)
{
this.props.onChangeCreerCompte({creerCompte:{[e.target.name]:e.target.value}});
}

  render() {
    return (
    	<div className="container">
		 <Form>
			 <h1>ShareYourSport  </h1>
		        <FormGroup>
		          <Label for="email">Email</Label>
		          <Input type="email" onChange={this.handleChangeConnexion}  name="email" placeholder="Email"  />
		        </FormGroup>
		        <FormGroup>
		          <Label for="password">Password</Label>
		          <Input type="password" onChange={this.handleChangeConnexion} name="motdepasse"  placeholder="Mot de passe" />
		        </FormGroup>

		         <Button onClick={this.props.onConnexion} color="primary">Connexion </Button>  <Button  onClick={this.props.onToggle} color="primary">Créer un compte</Button>
		 </Form>



        
        <Modal isOpen={this.props.modal}  >
          <ModalHeader>Créer un compte</ModalHeader>
          <ModalBody>

        		  <FormGroup>
		          <Label for="pseudo">Pseudo</Label>
		          <Input type="text" onChange={this.handleChangeCreeCompte} name="pseudo"  placeholder="Pseudo" />
		        </FormGroup>

         		 <FormGroup>
		          <Label for="email">Email</Label>
		          <Input type="email" onChange={this.handleChangeCreeCompte}  name="email" placeholder="Email" />
		        </FormGroup>

		        <FormGroup>
		          <Label for="password">Password</Label>
		          <Input type="password" onChange={this.handleChangeCreeCompte} name="motdepasse"  placeholder="Mot de passe" />
		        </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.onCreerCompte}>Valider</Button>{' '}
            <Button color="secondary" onClick={this.props.onToggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
	    </div>


    	)
  }
}

Login.propTypes={
modal:PropTypes.bool.isRequired,
onToggle:PropTypes.func.isRequired,
onChangeCreerCompte:PropTypes.func.isRequired,
onChangeConnexion:PropTypes.func.isRequired,
onConnexion:PropTypes.func.isRequired,
onCreerCompte:PropTypes.func.isRequired,

}
 