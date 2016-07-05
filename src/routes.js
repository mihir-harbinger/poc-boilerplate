import React, { Component } from 'react'
import {Router, IndexRoute, Route, Link, browserHistory} from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import CompanyInformation from './containers/CompanyInformation'
import About from './containers/About'
import NoMatch from './containers/NoMatch'


export default class Routes extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="company/:companyId" component={CompanyInformation}/>
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    )
  }
}
