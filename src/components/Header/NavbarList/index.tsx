import React from 'react';

import './NavbarList.scss';

type NavbarListProps = {
	children: React.ReactNode | React.ReactNode[];
	type?: 'bottom';
};

export const NavbarList: React.FC<NavbarListProps> = ({children, type}) => {
	return (
		<ul className={`navbar__list ${type ? `${type}-navbar__list` : ''}`}>
			{children}
		</ul>
	);
};
