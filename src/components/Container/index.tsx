import React from 'react';

import './Container.scss';

type ContainerProps = {
	children: JSX.Element | JSX.Element[];
	paddingRight?: string;
};

export const Container = ({children, paddingRight}: ContainerProps) => {
	return (
		<div className="container" style={{paddingRight}}>
			{children}
		</div>
	);
};
