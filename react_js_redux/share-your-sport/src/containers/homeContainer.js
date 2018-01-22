import React from 'react';
import ReactDOM from 'react-dom';

import {Home} from '../components/home'
import '../styles/home.css';
import {NavBarContainer} from './navBarContainer';
import {ModalContainer} from './modalContainer';
// external ressources
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

export class HomeContainer extends React.Component {
 constructor(props) {
    super(props);
   this.state = {
                center: {
                  lat: 48.864716, 
                  lng: 2.349014
                },
               zoom: 11,
               page:'home',
               markers:[]
             };

  }

  render() {
    return (
      <div>
        <NavBarContainer/>
           <div className="gm-container">
             <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyCn2AbzxV5WssLpW0Eik6t2zABfKm6wZpA',
                language: 'fr'
              }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
              
            {this.state.markers}
            </GoogleMapReact>
          </div>
      </div>
    	);
  }

  componentDidMount() {
  let self=this;
   axios.get('http://localhost:8080/allEvent')
    .then(function (response) {

        response.data.map((event) =>(
            self.state.markers.push( 
                        <ModalContainer
                          lat={event.latitude}
                          lng={event.longitude} 
                          page={self.state.page}
                          event={event}
                          />
                        )   
                    )
                 )
    })
    .catch(function (error) {
      console.log(error);
    }); 

  }
}


