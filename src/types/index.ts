export type LinkType = {
	path: string;
	text: string;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	dropdownItems?: LinkType[]
};



export type IconType = {
	width: number;
	height: number;
	fill?: string;
};
