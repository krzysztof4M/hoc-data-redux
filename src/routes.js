import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Photos from './components/Photos'
import Users from './components/Users'
import Todos from './components/Todos'

import requireData from './utils/requireData'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={requireData(Home)} />
		<Route path="photos" component={requireData(Photos)}/>
		<Route path="users" component={requireData(Users)} />
		<Route path="todos" component={requireData(Todos)} />
	</Route>
)