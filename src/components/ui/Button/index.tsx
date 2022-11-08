import React from 'react';

import './Button.scss';

type ButtonProps = {
	className: string;
	color: string;
	background?: string;
	children?: React.ReactNode | React.ReactNode | string;
	onClick?: () => void;
	borderRadius: string;
	padding?: string;
};

export const Button: React.FC<ButtonProps> = ({
	className,
	color,
	background,
	children,
	onClick,
	borderRadius,
	padding,
}) => {
	return (
		<button
			onClick={onClick}
			className={'button ' + className}
			style={{
				background,
				borderRadius,
				color,
				padding,
			}}
		>
			{children}
		</button>
	);
};
