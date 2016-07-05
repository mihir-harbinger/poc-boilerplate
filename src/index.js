import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'
import {Router, Route, Link, browserHistory} from 'react-router'
import 'semantic-ui-css/semantic.min.css';

import configureStore from './store'
import { fetchData } from './actions'

import App from './containers/App';
import About from './containers/About';
import NoMatch from './containers/NoMatch';

const store = configureStore()
const ROOT = document.getElementById('root')

store.dispatch(fetchData())

render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path="/" component={App}>
		      	<Route path="about" component={About}/>
		      	<Route path="*" component={NoMatch}/>
		    </Route>
		</Router>
	</Provider>,
	ROOT
);
