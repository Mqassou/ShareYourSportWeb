import React from 'react';
import ReactDOM from 'react-dom';

import {Home} from '../components/home'
import '../styles/home.css';
import {NavBarContainer} from './navBarContainer';
import {ModalContainer} from './modalContainer';
// external ressources
import axios from 'axios';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

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

      this.onJoinEvent=this.onJoinEvent.bind(this);
  }

  onJoinEvent(_eventId)
  {
    const self=this;
   axios.post('http://localhost:8080/joinEvent', {
      userId: cookies.get('userId'),
      eventId: _eventId
    })
    .then(function (response) {
      console.log(response);
      if( response.data ==true)
      {
      console.log("evenement rejoint");
      // prévoir pop up de confirmation
      }
    
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  render() {

    return (
      <div>
        <NavBarContainer/>
          <Home center={this.state.center} zoom={this.state.zoom} markers={this.state.markers}/>
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
                          onJoinEvent={self.onJoinEvent}
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


