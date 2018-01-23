import React from 'react';
import ReactDOM from 'react-dom';
import {NavBarContainer} from './navBarContainer';
import {ModalContainer} from './modalContainer';
import {CreateEvent} from '../components/createEvent'
import '../styles/createEvent.css';

//external ressources
import axios from 'axios';



export class CreateEventContainer extends React.Component {
 constructor(props) {
    super(props);
    this.state={
          event:{
            sport:'',
            lieupratique:'',
            ville:'',
            adresse:'',
            latitude:'',
            longitude:'',
            date:'',
            heuredebut:'',
            heurefin:'',
            nbrpersonne:''
          },
         center: {
                  lat: 48.864716, 
                  lng: 2.349014
                },
               zoom: 11,
               page:'createEvent',
               markers:[]
      }


      this.choisir=this.choisir.bind(this);
      this.onChangeCreateEvent=this.onChangeCreateEvent.bind(this);
      this.creer=this.creer.bind(this);
  }

choisir(nom,adresse,ville,latitude,longitude)
{
const values={
            lieupratique:nom,
            ville:ville,
            adresse:adresse,
            latitude:latitude,
            longitude:longitude,
};

this.setState({
      event: Object.assign({},this.state.event,values)
    });
}

onChangeCreateEvent(newValue)
{
this.setState({
      event: Object.assign({},this.state.event,newValue.event)
    });
}

creer()
{
  let self=this;
   axios.post('http://localhost:8080/createEvent',
   {
            sport:this.state.event.sport,
            lieupratique:this.state.event.lieupratique,
            ville:this.state.event.ville,
            adresse:this.state.event.adresse,
            latitude:this.state.event.latitude,
            longitude:this.state.event.longitude,
            date:this.state.event.date,
            heuredebut:this.state.event.heuredebut,
            heurefin:this.state.event.heurefin,
            nbrpersonne:this.state.event.nbrpersonne,
   })
    .then(function (response) {
     response.data==true? console.log("created event"): console.log("Not created event");
    })
    .catch(function (error) {
      console.log(error);
    }); 
}

  render() {
    return  (
    <div>
      <NavBarContainer/>
      <CreateEvent {...this.state.event} onChangeCreateEvent={this.onChangeCreateEvent} onCreer={this.creer} center={this.state.center} zoom={this.state.zoom} markers={this.state.markers} />
    </div>
    )
  }



componentDidMount() {
  let self=this;
   axios.get('http://localhost:8080/allField')
    .then(function (response) {

        response.data.map((field,index) =>(
            self.state.markers.push( 
                        <ModalContainer
                          lat={field.latitude}
                          lng={field.longitude} 
                          page={self.state.page}
                          field={field}
                          onChoisir={self.choisir}
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
 