import React, { Component } from 'react'
import { connect } from 'react-redux'
import requireData from '../utils/requireData'
import {getTodos} from '../actions/todosActions'
import {getPhotos} from '../actions/photosActions'
import {getUsers} from '../actions/usersActions'

class Todos extends Component {
  render() {
    return (
      <h1>Todos</h1>
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

export default connect(null,{getTodos,getPhotos,getUsers})(requireData(connect(mapStateToProps)(Todos)))