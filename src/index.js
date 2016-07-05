import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import configureStore from './store'
import { fetchData } from './actions'

import Routes from './routes'

const store = configureStore()
const ROOT = document.getElementById('root')

store.dispatch(fetchData())

render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	ROOT
)
