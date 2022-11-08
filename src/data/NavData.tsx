import {useNavigation} from 'react-router-dom';
import {MapIcon} from '../assets/svg/MapIcon';
import {LinkType} from '../types';

export const topNavigationItems: LinkType[] = [
	{
		path: '/',
		text: 'Главная',
	},
	{
		path: '/news',
		text: 'Новости',
	},
	{
		path: '/tariffs',
		text: 'Размещение и тарифы',
	},
	{
		path: '/ads-on-map',
		text: 'Объявления на карте',
		icon: <MapIcon width={8} height={10} fill={'#8291A3'} />,
		iconPosition: 'left',
	},
	{
		path: '/contacts',
		text: 'Контакты',
	},
];

export const bottomNavigationItems: LinkType[] = [
	{
		path: '/flats',
		text: 'Квартиры на сутки',
		icon: <MapIcon width={12} height={15} />,
		iconPosition: 'right',
		dropdownItems: [
			{
				text: 'Квартиры на сутки в Минске',
				path: 'minsk',
			},
			{
				text: 'Квартиры на сутки в Гомеле',
				path: 'gomel',
			},
			{
				text: 'Квартиры на сутки в Бресте',
				path: 'brest',
			},
			{
				text: 'Квартиры на сутки в Витебске',
				path: 'vitebsk',
			},
			{
				text: 'Квартиры на сутки в Гродно',
				path: 'grodno',
			},
			{
				text: 'Квартиры на сутки в Могилеве',
				path: 'mogilyov',
			},
		],
	},
	{
		path: '/cottages',
		text: 'Коттеджи и усадьбы',
	},
	{
		path: '/saunas',
		text: 'Бани и Сауны',
	},
	{
		path: '/cars',
		text: 'Авто на прокат',
	},
];
