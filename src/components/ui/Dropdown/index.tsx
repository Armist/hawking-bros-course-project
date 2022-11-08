import React from 'react';

import './Dropdown.scss';

type DropdownProps = {
	children: React.ReactNode;
	isShown: boolean;
	onMouseLeave: () => void;
};

type DropdownItemProps = {
	children: React.ReactNode | React.ReactNode[] | string;
	onClick: () => void;
	padding?: string
};

export const DropdownItem: React.FC<DropdownItemProps> = ({
	children,
	onClick,
	padding
}) => {
	return (
		<li className="dropdown__item" onClick={onClick}
			style={{padding: padding}}
		>
			{children}
		</li>
	);
};

export const Dropdown: React.FC<DropdownProps> = ({
	children,
	isShown,
	onMouseLeave,
}) => {
	return (
		<ul
			className={`dropdown ${!isShown ? 'dropdown-hidden' : ''}`}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</ul>
	);
};
