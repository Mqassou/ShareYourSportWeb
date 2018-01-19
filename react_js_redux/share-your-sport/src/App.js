import React from 'react';
import ReactDOM from 'react-dom';
import {LoginContainer} from './containers/loginContainer';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginContainer />, document.getElementById('root'));
registerServiceWorker();
