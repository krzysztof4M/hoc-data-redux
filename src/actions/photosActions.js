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

function photosRequest () {
  return {
    type: 'PHOTOS_REQUEST_PENDING'
  }
}

export function getPhotos() {
	console.log('getPhotos')
  return function(dispatch) {
    dispatch(photosRequest())
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        dispatch(photosRequestSuccess(response))
      })
      .catch((err) => {
        dispatch(photosRequestError(err))
      })
  }
}