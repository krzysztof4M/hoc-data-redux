import React, { Component } from 'react'
import { connect } from 'react-redux'

import requireData from '../utils/requireData'

import { getPhotos } from '../actions/photosActions'
import { getUsers } from '../actions/usersActions'

class Users extends Component {
  render() {
    return (
      <div>
        <h1>Users: {this.props.users.length}</h1>
        <h1>Photos: {this.props.photos.length}</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
		photos: state.photos,
		users: state.users
	}
}

export default connect(null,{ getPhotos, getUsers })(requireData(connect(mapStateToProps)(Users)))