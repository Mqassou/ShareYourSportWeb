import React from 'react';
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
               markers:[],
               displayPopUp:false
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
      if( response.data===true)
      {
      self.setState({displayPopUp:true})
      setTimeout(function() {  self.setState({displayPopUp:false}); }, 3000);
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
          <Home {...this.state}/>
      </div>
    	);
  }

  componentDidMount() {
  let self=this;
   axios.get('http://localhost:8080/allEvent')
    .then(function (response) {

        response.data.map((event,index) =>(
            self.state.markers.push( 
                        <ModalContainer
                          lat={event.latitude}
                          lng={event.longitude} 
                          page={self.state.page}
                          event={event}
                          onJoinEvent={self.onJoinEvent}
                          key={index}
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


