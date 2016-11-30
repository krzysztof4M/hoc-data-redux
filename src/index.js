// import { AppContainer } from 'react-hot-loader'
import "babel-polyfill";
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/Root'

import './sass/app.scss'

const app = document.getElementById('app');

ReactDOM.render(<Root />, app );


// if (module.hot) {
//   module.hot.accept('./components/Root', () => {
//     const NextRoot = require('./components/Root').default;
//     ReactDOM.render(
//       <AppContainer>
//          <NextRoot />
//       </AppContainer>,
//       app
//     );
//   });
// }