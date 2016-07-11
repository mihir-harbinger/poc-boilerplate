import React, { Component } from 'react'
import {Router, IndexRoute, Route, Link, browserHistory} from 'react-router'

import App from './containers/App'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import CompanyInformation from './containers/CompanyInformation'
import About from './containers/About'
import NoMatch from './containers/NoMatch'


export default class Routes extends Component{
  constructor(props){
    super(props)
    this.requireAuth = this.requireAuth.bind(this)
  }
  requireAuth(nextState, replaceState){
    // if(!localStorage.getItem('loggedIn')){
    //   replaceState({nextPathname: nextState.location.pathname}, '/login')
    // }
  }
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="login" component={Login} />
          <IndexRoute component={Dashboard} onEnter={this.requireAuth} />
          <Route path="company/:companyId" component={CompanyInformation}/>
          <Route path="about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
    )
  }
}
