export default (state = [], action = {}) => {
  switch(action.type) {
    case 'USERS_REQUEST_SUCCESS':
      return action.payload;

    case 'USERS_REQUEST_ERROR':
      return state;

    case 'USERS_REQUEST_PENDING':
      return state;

    default: return state;
  }
}