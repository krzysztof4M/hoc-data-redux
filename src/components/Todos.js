import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from'redux'
import requireData from '../utils/requireData'
import {getTodos} from '../actions/todosActions'
import {getPhotos} from '../actions/photosActions'

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
		photos: state.photos
	}
}

export default connect(null,{getTodos,getPhotos})(requireData(Todos))