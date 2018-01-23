import React from 'react';
import PropTypes from 'prop-types';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	FormText } from 'reactstrap';

export class Parameters extends React.Component {

 constructor(props) {
    super(props);
	this.handleChangeParametres=this.handleChangeParametres.bind(this);
  }

handleChangeParametres(e)
{
this.props.onChangeParametres({parametres:{[e.target.name]:e.target.value}});
}

  render() {
    return (
    	<div id="formParameters">
		 <Form>
		       <FormGroup>
		          <Label for="pseudo">Pseudo</Label>
		           <Input type="text" onChange={this.handleChangeParametres} value={this.props.parametres.pseudo} name="pseudo" placeholder="Pseudo"/>     
		       </FormGroup>

				<FormGroup>
		           <Label for="email">Email</Label>
		           <Input type="email" onChange={this.handleChangeParametres} value={this.props.parametres.email} name="email"   placeholder="Email"/>
		 		</FormGroup>

		        <FormGroup>
		           <Label for="Telephone">Téléphone</Label>
		           <Input type="text"  onChange={this.handleChangeParametres} value={this.props.parametres.tel} name="tel"  placeholder="Téléphone"/>
		       </FormGroup>
		    
		       	 <FormGroup>
		           <Label for="Motdepasse">Mot de passe</Label>
		            <Input type="password"  onChange={this.handleChangeParametres} value={this.props.parametres.motdepasse} name="motdepasse"  placeholder="Mot de passe"/>
		        </FormGroup>

		  		<FormGroup>
		           <Label for="nom">Nom</Label>
		              <Input type="text"  onChange={this.handleChangeParametres} value={this.props.parametres.nom} name="nom"  placeholder="Nom"/>
		        </FormGroup>

				<FormGroup>
		           <Label for="prenom">Prénom</Label>
		              <Input type="text"  onChange={this.handleChangeParametres} value={this.props.parametres.prenom} name="prenom"  placeholder="Prenom"/>
		        </FormGroup>

				<FormGroup>
		           <Label for="adresse">Adresse</Label>
		               <Input type="text"  onChange={this.handleChangeParametres} value={this.props.parametres.adresse} name="adresse"   placeholder="Adresse"/>
		        </FormGroup>

				<FormGroup>
		           <Label for="ville">Ville</Label>
		              <Input type="text"   onChange={this.handleChangeParametres} value={this.props.parametres.ville} name="ville"   placeholder="Ville"/>
		        </FormGroup>	

				<FormGroup>
		           <Label for="datedenaissance"> Date de naissance</Label>
		            <Input type="text"  onChange={this.handleChangeParametres} value={this.props.parametres.date_de_naissance} name="date_de_naissance"  placeholder="dd/MM/yyyy"/>
		        </FormGroup>	
		         
		         <FormGroup>
		          <Label for="sexe">Sexe</Label>
		          <Input type="select" onChange={this.handleChangeParametres}  value={this.props.parametres.sexe} name="sexe">
		            <option >Homme</option>
		             <option >Femme</option> 
		          </Input>
		        </FormGroup>

		         <Button onClick={this.props.onUpdate} color="primary">Mettre à jour </Button> 

		   </Form>
		</div>
    	)
  }
}

