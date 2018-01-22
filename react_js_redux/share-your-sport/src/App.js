import React from 'react';
import ReactDOM from 'react-dom';
import {LoginContainer} from './containers/loginContainer';
import {HomeContainer} from './containers/homeContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';


export class App extends React.Component {
 constructor(props) {
    super(props);

  //  this.state = { }
  }


  render() {
    return (
      <Router>
           <div>
             <Route exact path='/' component={LoginContainer}/>
             <Route path='/home' component={HomeContainer}/>
             <Route path='/creer' component={HomeContainer}/>
               <Route path='/parametres' component={HomeContainer}/>
         </div>
      </Router>
      

      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
