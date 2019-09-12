import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Main from './modules/Main'

ReactDOM.render(<Main />, document.getElementById('root'));


serviceWorker.unregister();
