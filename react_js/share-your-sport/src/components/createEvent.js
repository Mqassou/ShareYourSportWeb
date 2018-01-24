import React from 'react';
import PropTypes from 'prop-types';
import {PopUp} from '../components/popUp'
import GoogleMapReact from 'google-map-react';
import { 
	Button, 
	Form, 
	FormGroup, 
	Label, 
	Input, 
	Alert} from 'reactstrap';

export class CreateEvent extends React.Component {
constructor(props) {
    super(props);
this.handleChangeCreateEvent=this.handleChangeCreateEvent.bind(this);
}

handleChangeCreateEvent(e)
{

this.props.onChangeCreateEvent({event:{[e.target.name]:e.target.value}});

}
  render() {
    return (
		<div id="formCreateEvent">
		   <PopUp text="Evenement crée"  displayPopUp={this.props.displayPopUp}/>
			<Form>

			 <FormGroup>
		          <Label for="sport">Sport</Label>
		          <Input type="select" onChange={this.handleChangeCreateEvent}  name="sport">
			           <option>Badminton</option>
		               <option>Football</option>
		               <option>Rugby</option>
		               <option>Course à pied</option>
		               <option>Tennis</option>
		               <option>Volley-ball</option>
		               <option>Basketball</option>
		               <option>Cyclisme</option>
		          </Input>
		        </FormGroup>

				<FormGroup>
		           <Label for="date">Date</Label>
		            <Input type="date"  onChange={this.handleChangeCreateEvent}  name="date"  placeholder="dd/MM/yyyy"/>
		        </FormGroup>	
 
			     
			      <div id="mapCreate">
			             <GoogleMapReact
			              bootstrapURLKeys={{
			                key: 'AIzaSyCn2AbzxV5WssLpW0Eik6t2zABfKm6wZpA',
			                language: 'fr'
			              }}
			              defaultCenter={this.props.center}
			              defaultZoom={this.props.zoom}
			            >
			              
			            {this.props.markers}
			            </GoogleMapReact>
			       </div>

			       	<Alert color="success">
				     Lieu : {this.props.event.lieupratique}<br/>
					Adresse : {this.props.event.adresse} <br/>
					Ville : {this.props.event.ville}
				     </Alert>

				<FormGroup>
		           <Label for="heuredebut">Heure début</Label>
		            <Input type="time"  onChange={this.handleChangeCreateEvent} name="heuredebut"  placeholder="Heure début"/>
		        </FormGroup>	

			      <FormGroup>
		           <Label for="heurefin">Heure fin</Label>
		            <Input type="time"  onChange={this.handleChangeCreateEvent} name="heurefin"  placeholder="Heure fin"/>
		         </FormGroup>	

		          <FormGroup>
		           <Label for="nbrpersonne">Nombre de personnes</Label>
		            <Input type="number"  onChange={this.handleChangeCreateEvent} name="nbrpersonne"  placeholder="Nombre de personnes"/>
		          </FormGroup>	

			    

			         <Button onClick={this.props.onCreer} color="primary">Créer l'événement</Button> 
			   </Form>

		</div>
    	)
  }
}




CreateEvent.propTypes={
onChangeCreateEvent:PropTypes.func.isRequired,
onCreer:PropTypes.func.isRequired,

event: PropTypes.shape({
            sport:PropTypes.string.isRequired,
            lieupratique:PropTypes.string.isRequired,
            ville:PropTypes.string.isRequired,
            adresse:PropTypes.string.isRequired,
            latitude:PropTypes.string.isRequired,
            longitude:PropTypes.string.isRequired,
            date:PropTypes.string.isRequired,
            heuredebut:PropTypes.string.isRequired,
            heurefin:PropTypes.string.isRequired,
            nbrpersonne:PropTypes.string.isRequired
          }),

center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
zoom: PropTypes.number.isRequired,
page:PropTypes.string.isRequired,
markers:PropTypes.array.isRequired,
displayPopUp:PropTypes.bool.isRequired
}


   