import axios from 'axios';

function usersRequestSuccess(response) {
  return {
    type: 'USERS_REQUEST_SUCCESS',
    payload: response.data
  }
}

function usersRequestError(err) {
  return {
    type: 'USERS_REQUEST_ERROR',
    payload: err
  }
}

function usersRequest () {
  return {
    type: 'USERS_REQUEST_PENDING'
  }
}

export function getUsers() {
  return function(dispatch){
    dispatch(usersRequest())
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(
    	(response) => {
    	console.log('users', new Date().getTime())
      dispatch(usersRequestSuccess(response))
    })
    .catch((err) => {
      dispatch(usersRequestError(err))
    })
  }
}
