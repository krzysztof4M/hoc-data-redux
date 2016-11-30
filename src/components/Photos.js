import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from './Loader'
import { getTodos } from '../actions/todosActions'
import { getPhotos } from '../actions/photosActions'

class Photos extends Component {
  constructor(props){
    super(props)
    this.state={isLoading:true}
  }
	componentDidMount(){
    this.fetchData()
	}

  fetchData(){
    const {dispatch} = this.props
    const that = this;
    Promise.all([
      dispatch(getTodos()),
      dispatch(getPhotos())
    ])
    .then(() => {
      console.log('I did everything!', new Date().getTime());
      that.setState({isLoading:false})
    });

  }
  displayContent(){
    const {isLoading} = this.state
    console.log('displayContnent',isLoading)
    let content = isLoading ? <h1>Photos</h1> : <Loader />
    return content
  }
  render() {
    return (
      <div>
      {this.displayContent()}
      </div>
    );
  }
}

export default connect()(Photos)