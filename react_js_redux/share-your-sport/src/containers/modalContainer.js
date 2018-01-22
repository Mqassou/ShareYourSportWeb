import React from 'react';
import ReactDOM from 'react-dom';
import {Modal} from '../components/modal'

//import marker
import markerBadminton from '../images/marker/marker_badminton.png';
import markerFootball from '../images/marker/marker_football.png';
import markerRugby from '../images/marker/marker_rugby.png';
import markerRun from '../images/marker/marker_run.png';
import markerTennis from '../images/marker/marker_tennis.png';
import markerVolleyBall from '../images/marker/marker_volleyball.png';
import markerBasketball from '../images/marker/marker_basketball.png';
import markerCyclisme from '../images/marker/marker_cycle.png';
//external ressources
import axios from 'axios';

const marker={
      'Badminton':markerBadminton,
      'Football':markerFootball,
      'Rugby':markerRugby,
      'Course à pied':markerRun,
      'Tennis':markerTennis,
      'Volley-ball':markerVolleyBall,
      'Basketball':markerBasketball,
      'Cyclisme':markerCyclisme
    }

export class ModalContainer extends React.Component {
 constructor(props) {
    super(props);
    this.state={
      toggle:true,
      page:this.props.page,
      event:this.props.event
    };
    this.toggle=this.toggle.bind(this);
  }

toggle()
{
     console.log(this.state.toggle);
   this.setState({toggle:!this.state.toggle})

}

  shouldComponentUpdate(nextProps, nextState)
  {
    if(this.state.toggle!=nextState.toggle)
    {
      return true;
    }
     return false;
  }

  render() {
    console.log("this.state.event= "+this.state.event.lieupratique);
    if(this.props.page==='home')
    {
       return (<Modal page={this.state.page} event={this.state.event}onToggle={this.toggle} toggle={this.state.toggle} marker={marker[this.state.event.sport]}/>)
    }
    else
    {
        return (<p>à venir :  </p>)
    }
  }
}

