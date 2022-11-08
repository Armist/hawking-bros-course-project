import React from 'react';

type NavigationListProps = {
	listClass: string;
	children: React.ReactNode | React.ReactNode[];
};

export const NavigationList = ({listClass, children}: NavigationListProps) => {
	return <ul className={listClass}>{children}</ul>;
};
