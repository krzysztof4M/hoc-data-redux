import React from 'react';
import { connect } from 'react-redux';

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