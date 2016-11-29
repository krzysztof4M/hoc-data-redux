import axios from 'axios';

function todosRequestSuccess(response) {
  return {
    type: 'TODOS_REQUEST_SUCCESS',
    payload: response
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
	console.log('getTodos')
  return dispatch => {
  	console.log('getTodos2', dispatch)
    dispatch(todosRequest())
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        dispatch(todosRequestSuccess(response))
      })
      .catch((err) => {
        dispatch(todosRequestError(err))
      })
  }
}