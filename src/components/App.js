import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
    	<div>
	      <h1>App component!</h1>
	      <Link to="/">Home</Link>
	      <Link to="/photos">Photos</Link>
	      <Link to="/users">Users</Link>
	      <Link to="/todos">Todods</Link>
	      {this.props.children}
	     </div>
    );
  }
}