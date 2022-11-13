export type LinkType = {
	path: string;
	text: string;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	dropdownItems?: LinkType[];
};

export type IconType = {
	width: number;
	height: number;
	fill?: string;
};

export type District = {
	id: number;
	name: string;
};

export type City = {
	id: number;
	name: string;
	path: string;
	districts?: District[];
};
