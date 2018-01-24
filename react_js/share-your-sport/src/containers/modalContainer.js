import React from 'react';
import {Modal} from '../components/modal'

//import marker
import markerEmpty from '../images/marker/marker.png';
import markerBadminton from '../images/marker/marker_badminton.png';
import markerFootball from '../images/marker/marker_football.png';
import markerRugby from '../images/marker/marker_rugby.png';
import markerRun from '../images/marker/marker_run.png';
import markerTennis from '../images/marker/marker_tennis.png';
import markerVolleyBall from '../images/marker/marker_volleyball.png';
import markerBasketball from '../images/marker/marker_basketball.png';
import markerCyclisme from '../images/marker/marker_cycle.png';


const marker={
      'Marker':markerEmpty,
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
      toggle:true
    };
    this.toggle=this.toggle.bind(this);
  }

toggle()
{
   this.setState({toggle:!this.state.toggle})

}

  shouldComponentUpdate(nextProps, nextState)
  {
    if(this.state.toggle!==nextState.toggle)
    {
      return true;
    }
     return false;
  }

  render() {
    if(this.props.page==='home')
    {
       return (<Modal {...this.props} onToggle={this.toggle} toggle={this.state.toggle} marker={marker[this.props.event.sport]}/>)
    }
    else
    {
       return (<Modal {...this.props} onToggle={this.toggle} toggle={this.state.toggle} marker={marker['Marker']}/>)
    }
  }
}

