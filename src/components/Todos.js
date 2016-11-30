import React, { Component } from 'react'
import { connect } from 'react-redux'

import requireData from '../utils/requireData'

import { getTodos } from '../actions/todosActions'
import { getPhotos } from '../actions/photosActions'
import { getUsers } from '../actions/usersActions'

class Todos extends Component {
  render() {
    return (
    	<div>
        <h1>Users: {this.props.users.length}</h1>
        <h1>Photos: {this.props.photos.length}</h1>
        <h1>Todos: {this.props.todos.length}</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		todos: state.todos,
		photos: state.photos,
		users: state.users
	}
}

export default connect(null,{ getTodos, getPhotos, getUsers })(requireData(connect(mapStateToProps)(Todos)))