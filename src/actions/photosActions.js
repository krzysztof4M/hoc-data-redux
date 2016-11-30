import axios from 'axios';

function photosRequestSuccess(response) {
  return {
    type: 'PHOTOS_REQUEST_SUCCESS',
    payload: response.data
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
  return function(dispatch) {
  	dispatch(photosRequest())
    return axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
    	console.log('photos',new Date().getTime())
      dispatch(photosRequestSuccess(response))
    })
    .catch((err) => {
      dispatch(photosRequestError(err))
    })
  }
}