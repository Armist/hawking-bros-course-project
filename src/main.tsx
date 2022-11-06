import React from 'react';
import ReactDOM from 'react-dom/client';

import {router} from './router';
import {RouterProvider} from 'react-router-dom';

import 'normalize.css';
import './assets/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
