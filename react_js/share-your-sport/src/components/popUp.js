import React from 'react';
import PropTypes from 'prop-types';
import '../styles/popUp.css';
import { 

	Fade,
	Alert} from 'reactstrap';

export const PopUp=(props) => ( 
    	<div id="popUp">
    	  <Fade in={props.displayPopUp} tag="h5" className="mt-3">
                 	<Alert color="success">
						{props.text}
					</Alert>
            </Fade> 
         </div>
    	)
  




PopUp.propTypes={
text:PropTypes.string.isRequired,
displayPopUp:PropTypes.bool.isRequired
}


