export default (state = [], action = {}) => {
  switch(action.type) {
    case 'TODOS_REQUEST_SUCCESS':
      return action.payload;

    case 'TODOS_REQUEST_ERROR':
      return state;

    case 'TODOS_REQUEST_PENDING':
      return state;

    default: return state;
  }
}