import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {Container} from '../components/Container';
import {MainPage} from '../pages/MainPage';
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
				element: (
					<Container>
						<h1>Error</h1>
					</Container>
				),
			},
		],
	},
]);
