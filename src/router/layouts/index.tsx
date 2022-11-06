import React from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from '../../components/Container';

export const DefaultLayout = () => {
	return (
		<>
			<header>
				<Container>
					<p>Header</p>
				</Container>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
