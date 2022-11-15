import React from 'react';

import './NavbarItem.scss';

type NavbarItemProps = {
	children: React.ReactNode | React.ReactNode[];
	type?: 'top' | 'bottom';
};

export const NavbarItem: React.FC<NavbarItemProps> = ({children, type}) => {
	return (
		<li className={`navbar__item ${type ? `${type}-navbar__item` : ''}`}>
			{children}
		</li>
	);
};
