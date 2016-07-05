import React, { Component } from 'react'
import {Router, Route, Link, browserHistory} from 'react-router'

import NavigationBar from '../components/NavigationBar'
import '../components/assets/styles/main.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="ui main container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
