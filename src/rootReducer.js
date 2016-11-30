import { combineReducers } from 'redux';

import photos from './reducers/photos';
import todos from './reducers/todos';
import users from './reducers/users';

export default combineReducers({
	photos,
	todos,
	users
});