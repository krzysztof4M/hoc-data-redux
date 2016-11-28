import axios from 'axios';

function photosRequestSuccess(response) {
  return {
    type: 'PHOTOS_REQUEST_SUCCESS',
    payload: response
  }
}

function photosRequestError(err) {
  return {
    type: 'PHOTOS_REQUEST_ERROR',
    payload: err
  }
}

function requestExpenditures () {
  return {
    type: 'PHOTOS_REQUEST_PENDING'
  }
}

export function getPhotos() {
  return function(dispatch) {
    dispatch(requestExpenditures())
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        dispatch(expendituresRequestSuccess(response))
      })
      .catch((err) => {
        dispatch(expendituresRequestError(err))
      })
  }
}