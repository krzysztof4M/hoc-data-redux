import React from 'react';
import { connect } from 'react-redux';
import Loader from '../components/Loader'

export default function(ComposedComponent) {
  class FetchData extends React.Component {
    
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return connect(null, null)(FetchData);
}