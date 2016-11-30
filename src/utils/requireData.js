// import React from 'react'
// import Loader from '../components/Loader'
// import { connect } from 'react-redux'
// import _ from 'lodash'

// const FetchData = (ComposedComponent) => {
//   class FetchData extends React.Component {
//     constructor(props){
//       super(props)
//       this.state={isLoading: true}
//     }
//     componentDidMount(){
//       this.fetchData()
//     }

//     fetchData() {
//       const that = this
//       return Promise.all(
//         Object.keys(this.props)
//           .filter(element => _.isFunction(this.props[element]))
//           .map(function(element){
//             return new Promise(function(resolve, reject){
//               console.log(element)
//               console.log(that.props[element])
//               that.props[element]()
//               }
//             ).then(function(response){
//               console.log(response)
//               resolve(element)
//             })
//           })
//       ).then((response)=>console.log('response',response))
//       // Promise.all([this.props.getTodos(),this.props.getPhotos()]).then((response)=>console.log(response))
//     }

//     displayContent(){
//       let content = this.state.isLoading ? <Loader /> : <ComposedComponent {...this.props} />
//       return content
//     }

//     render() {
//       return (
//         <div>
//          {this.displayContent()}
//         </div>
//       )
//     }
//   }

//   return FetchData;
// }

// export default FetchData

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import _ from 'lodash'


const FetchData = (ComposedComponent) => {
  class FetchData extends Component {
    constructor(props){
      super(props)
      this.state={isLoading:true}
    }
    componentDidMount(){
      this.fetchData()
    }

    fetchData(){
      const that = this;
      console.log(this.props)
      

      Promise.all(
        [this.props.getPhotos(),
      this.props.getTodos()]
      )
      .then(() => {
        console.log('I did everything!', new Date().getTime());
        that.setState({isLoading:false})
      })
    }

    displayContent(){
      const {isLoading} = this.state
      console.log('displayContnent',isLoading)
      let content = isLoading ? <Loader /> : <ComposedComponent />
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
  return connect()(FetchData)
}

export default FetchData