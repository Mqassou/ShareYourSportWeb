import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import '../styles/modal.css';

export class Modal extends React.Component {

 constructor(props) {
    super(props);

  }



  render() {
  	if(this.props.page==='home')
  	{
  		return (
    		<div>
    		<img src={this.props.marker} onClick={this.props.onToggle}/>
    			<div  className="mapModal" style={this.props.toggle===false? {visibility:'visible'} : {visibility:'hidden'}}>
                  	<h6>Sport : {this.props.event.sport}</h6>
                     
                  		<p>Lieu :   {this.props.event.lieupratique}</p>
        		        <p>Adresse : {this.props.event.adresse} à  {this.props.event.ville}</p>
        		        <p>Date : Le  {this.props.event.date} de   {this.props.event.heuredebut}  à {this.props.event.heurefin} </p>
        		        <p>Participants :  {this.props.event.participants.length} / {this.props.event.nbrpersonne} max</p>

              		 
              		   
                 		<button type="button" className="btn btn-dark">Rejoindre</button>	 
                 		<button type="button" onClick={this.props.onToggle}  className="btn btn-dark closeModal">Fermer</button>	
                 	 
                </div>
            </div>
    	)
  	}
    else
    {
    	return (<p>à venir :  </p>)
    }
  }
}

 