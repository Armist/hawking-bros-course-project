import React from 'react';
import ReactDOM from 'react-dom/client';

import {router} from './router';
import {RouterProvider} from 'react-router-dom';

import {Provider} from 'react-redux';
import {setupStore} from './store/store';

import 'normalize.css';
import './assets/scss/index.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
