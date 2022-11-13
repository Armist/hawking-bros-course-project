import React from 'react';

import './Button.scss';

type ButtonProps = {
	className: string;
	children?: React.ReactNode | React.ReactNode | string;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
	className,
	children,
	onClick,
}) => {
	return (
		<button onClick={onClick} className={'button ' + className}>
			{children}
		</button>
	);
};
