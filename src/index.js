import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';

import { Provider } from 'react-redux';
import App from './App';

const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Provider>

		<AppWithRouter />

	</Provider>
	,
	document.getElementById('root')
);
