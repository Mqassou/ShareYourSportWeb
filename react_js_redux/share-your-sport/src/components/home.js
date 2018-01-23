import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

export class Home extends React.Component {
constructor(props) {
    super(props);

}
  render() {
    return (
 		<div className="gm-container">
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

    	)
  }
}

