import axios from 'axios';

function todosRequestSuccess(response) {
  return {
    type: 'TODOS_REQUEST_SUCCESS',
    payload: response.data
  }
}

function todosRequestError(err) {
  return {
    type: 'TODOS_REQUEST_ERROR',
    payload: err
  }
}

function todosRequest () {
  return {
    type: 'TODOS_REQUEST_PENDING'
  }
}

export function getTodos() {
  return function(dispatch){
    dispatch(todosRequest())
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(
    	(response) => {
    	console.log('todos', new Date().getTime())
      dispatch(todosRequestSuccess(response))
    })
    .catch((err) => {
      dispatch(todosRequestError(err))
    })
  }
}
