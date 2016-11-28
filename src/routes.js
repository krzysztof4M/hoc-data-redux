import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Photos from './components/Photos'
import Users from './components/Users'
import Todos from './components/Todos'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="photos" component={Photos}/>
		<Route path="users" component={Users} />
		<Route path="todos" component={Todos} />
	</Route>
)