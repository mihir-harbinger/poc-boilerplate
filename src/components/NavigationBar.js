import React, { Component} from 'react'
import { Link } from 'react-router'
import logo from './assets/images/logo.png'

export default class NavigationBar extends Component{
  render(){
    return(
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Link to="/" className="header item">
            <img className="logo" src={logo} />
              Sample Application
          </Link>
          <Link to="/" className="item">Dashboard</Link>
          <Link to="/" className="item">Logout</Link>
        </div>
      </div>
    )
  }
}
