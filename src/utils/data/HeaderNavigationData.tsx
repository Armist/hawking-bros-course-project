/* eslint-disable react/react-in-jsx-scope */
import {MapIcon} from '../../assets/svg/MapIcon';

type NavigationItem = {
	id: number;
	title: string;
	path?: string;
	icon?: React.ReactNode;
	childs?: NavigationItemChild[];
};

type NavigationItemChild = {
	id: number;
	title: string;
	path: string;
};

const topNavigationItems: NavigationItem[] = [
	{
		id: 1,
		title: 'Главная',
		path: '/',
	},
	{
		id: 2,
		title: 'Новости',
		path: '/news',
	},
	{
		id: 3,
		title: 'Размещение и тарифы',
		path: '/tariffs',
	},
	{
		id: 4,
		title: 'Объявления на карте',
		path: '/adds-map',
		icon: <MapIcon fill="currentColor" width={8} height={10} />,
	},
	{
		id: 5,
		title: 'Контакты',
		path: '/contacts',
	},
];

const bottomNavigationItems: NavigationItem[] = [
	{
		id: 1,
		title: 'Квартиры на сутки',
		path: '/flats',
		icon: <MapIcon fill="#ffd54f" width={12} height={15} />,
		childs: [
			{
				id: 1,
				title: 'Квартиры на сутки в Минске',
				path: 'flats/minsk',
			},
			{
				id: 2,
				title: 'Квартиры на сутки в Гомеле',
				path: 'flats/gomel',
			},
			{
				id: 3,
				title: 'Квартиры на сутки в Бресте',
				path: 'flats/brest',
			},
			{
				id: 4,
				title: 'Квартиры на сутки в Витебске',
				path: 'flats/vitebsk',
			},
			{
				id: 5,
				title: 'Квартиры на сутки в Гродно',
				path: 'flats/grodno',
			},
			{
				id: 6,
				title: 'Квартиры на сутки в Могилеве',
				path: 'flats/mogilev',
			},
		],
	},
	{
		id: 2,
		title: 'Коттеджи и усадьбы',
		path: '/cottages',
	},
	{
		id: 3,
		title: 'Бани и Сауны',
		path: '/saunas',
	},
	{
		id: 4,
		title: 'Авто напрокат',
		path: '/cars',
	},
];

export {topNavigationItems, bottomNavigationItems};
