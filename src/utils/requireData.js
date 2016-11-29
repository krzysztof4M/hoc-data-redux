import React from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader'
import _ from 'lodash'

const FetchData = (ComposedComponent) => {
  class FetchData extends React.Component {
    componentDidMount(){
    	Object.keys(this.props)
      .filter(element => _.isFunction(this.props[element]))
      .map(element => this.props[element]()) 
    }

    render() {

      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return FetchData;
}

export default FetchData