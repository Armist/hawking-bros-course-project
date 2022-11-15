import React from 'react';
import {Container} from '../../Container';
import './Navbar.scss';

type NavbarProps = {
	children: JSX.Element | JSX.Element[];
	type: 'top' | 'bottom' | 'adaptive';
	opened?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({children, type, opened}) => {
	return (
		<nav
			className={`navbar ${type}-navbar ${
				opened ? 'adaptive-navbar-open' : ''
			}`}
		>
			<Container>
				<div className={`navbar__inner ${type}-navbar__inner`}>{children}</div>
			</Container>
		</nav>
	);
};
