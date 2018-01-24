import React from 'react';
import PropTypes from 'prop-types';
import {PopUp} from '../components/popUp'

//external ressources
import GoogleMapReact from 'google-map-react';

export const Home =(props)=> (
      <div>
        <PopUp text="Evenement rejoint"  displayPopUp={props.displayPopUp}/>
     		<div className="gm-container">
                 <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyCn2AbzxV5WssLpW0Eik6t2zABfKm6wZpA',
                    language: 'fr'
                  }}
                  defaultCenter={props.center}
                  defaultZoom={props.zoom}
                >
                  
                {props.markers}
                </GoogleMapReact>
          </div>

      </div>

    	)

Home.propTypes={
center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }),
zoom: PropTypes.number.isRequired,
page:PropTypes.string.isRequired,
markers:PropTypes.array.isRequired,
displayPopUp:PropTypes.bool.isRequired
}
 