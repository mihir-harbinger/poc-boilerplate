import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';
import About from './containers/About';
import NoMatch from './containers/NoMatch';

const ROOT = document.getElementById('root')

render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      	<Route path="about" component={About}/>
	      	<Route path="*" component={NoMatch}/>
	    </Route>
	</Router>,
	ROOT
);