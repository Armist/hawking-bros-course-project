import React from 'react';

// NavigationItem

type NavigationItemProps = {
	children: React.ReactNode | React.ReactNode[];
	className: string;
	isRelative?: boolean;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
	children,
	className,
	isRelative,
}) => {
	return (
		<li
			className={className}
			style={{position: isRelative ? 'relative' : 'unset'}}
		>
			{children}
		</li>
	);
};

// NavigationList

type NavigationListProps = {
	listClass: string;
	children: React.ReactNode | React.ReactNode[];
};

export const NavigationList = ({listClass, children}: NavigationListProps) => {
	return <ul className={listClass}>{children}</ul>;
};
