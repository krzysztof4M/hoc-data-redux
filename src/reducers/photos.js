export default (state = [], action = {}) => {
  switch(action.type) {
    case 'PHOTOS_REQUEST_SUCCESS':
      return action.payload;

    case 'PHOTOS_REQUEST_ERROR':
      return state;

    case 'PHOTOS_REQUEST_PENDING':
      return state;

    default: return state;
  }
}