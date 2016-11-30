import React, { Component } from 'react'
import _ from 'lodash'

import Loader from '../components/Loader'


const FetchData = (ComposedComponent) => {
  class FetchData extends Component {
    constructor(props){
      super(props)
      this.state={
        isLoading: true
      }
    }

    componentDidMount(){
      this.fetchData()
    }

    fetchData(){
      const that = this;
      Promise.all(
        Object.keys(this.props)
          .filter(el => _.isFunction(this.props[el]))
          .map(el => this.props[el]())
      )
      .then(() => {
        console.log('I did everything!', new Date().getTime());
        that.setState({isLoading:false})
      })
    }

    displayContent(){
      const { isLoading } = this.state
      let content = isLoading ? <Loader /> : <ComposedComponent {...this.props}/>
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
  
  return FetchData
}

export default FetchData