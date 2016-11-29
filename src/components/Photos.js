import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions/todosActions'
import { getPhotos } from '../actions/photosActions'

import requireData from '../utils/requireData'


class Photos extends Component {

  render() {
    return (
      <h1>Photos</h1>
    );
  }
}

export default connect(null, {getTodos,getPhotos})(requireData(Photos))