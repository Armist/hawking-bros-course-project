import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {MainPage} from '../pages/MainPage';
import {NotFoundPage} from '../pages/NotFoundPage';
import {DefaultLayout} from './layouts/DefaultLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);
