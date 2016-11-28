import { combineReducers } from 'redux';

import photos from './reducers/photos';
import todos from './reducers/todos';

export default combineReducers({
	photos,
	todos
});