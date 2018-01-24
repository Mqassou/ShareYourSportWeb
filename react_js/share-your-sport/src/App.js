import React from 'react';
import ReactDOM from 'react-dom';
import {LoginContainer} from './containers/loginContainer';
import {HomeContainer} from './containers/homeContainer';
import {CreateEventContainer} from './containers/createEventContainer';
import {ParametersContainer} from './containers/parametersContainer';

//external ressources
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';


export const App=(props) => (
      <Router>
           <div>
             <Route exact path='/' component={LoginContainer}/>
             <Route path='/home' component={HomeContainer}/>
             <Route path='/creer' component={CreateEventContainer}/>
             <Route path='/parametres' component={ParametersContainer}/>
         </div>
      </Router>
      

      )



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
