/* eslint-disable @typescript-eslint/naming-convention */
import React, {useState} from 'react';
import {Container} from '../Container';
import {Logo} from '../ui/Logo';
import {NavigationList} from './NavigationList';
import {Button} from '../ui/Button';
import {LinkType} from '../../types';

import './Header.scss';
import type {Location} from 'react-router-dom';
import {Link, useLocation} from 'react-router-dom';
import {Dropdown, DropdownItem} from '../ui/Dropdown';

import {topNavigationItems, bottomNavigationItems} from '../../data/NavData';
import {NavigationItem} from './NavigationList/index';

export const Header = () => {
	const [droppable, setDroppable] = useState(false);

	const closeDropdown = () => {
		setDroppable(false);
	};

	const openDropdown = () => {
		setDroppable(true);
	};

	const location: Location = useLocation();

	const getPathText = (path: string) => {
		return {
			'/': 'Квартиры на сутки',
			'/flats/minsk': 'Квартиры в Минске',
			'/flats/gomel': 'Квартиры в Гомеле',
			'/flats/brest': 'Квартиры в Бресте',
			'/flats/vitebsk': 'Квартиры в Витебске',
			'/flats/grodno': 'Квартиры в Гродно',
			'/flats/mogilyov': 'Квартиры в Могилеве',
		}[path];
	};

	return (
		<header className="header">
			<nav className="top-navigation">
				<Container>
					<div className="top-navigation__inner">
						<NavigationList listClass="top-navigation__left">
							{topNavigationItems.map((item) => (
								<NavigationItem
									className={`top-navigation__left-item ${
										item.iconPosition ? item.iconPosition + '-icon' : ''
									}`}
									key={item.text}
								>
									<Link to={item.path}>
										{item.iconPosition === 'left'
											? item.icon
												? item.icon
												: ''
											: ''}
										<span>{item.text}</span>
										{item.iconPosition === 'right'
											? item.icon
												? item.icon
												: ''
											: ''}
									</Link>
								</NavigationItem>
							))}
						</NavigationList>

						<div className="top-navigation__right">
							<span className="top-navigation__right-item">
								<a href="#">Закладки</a>
							</span>
							<span className="top-navigation__right-item">
								<a href="#">Вход и регистрация</a>
							</span>
						</div>
					</div>
				</Container>
			</nav>
			<nav className="bottom-navigation">
				<Container>
					<div className="bottom-navigation__inner">
						<Logo />

						<NavigationList listClass="bottom-navigation__list">
							{bottomNavigationItems.map((item) => (
								<NavigationItem
									className={`bottom-navigation__list-item ${
										item.iconPosition ? item.iconPosition + '-icon' : ''
									}`}
									isRelative={Boolean(item.dropdownItems)}
									key={item.text}
								>
									{!item.dropdownItems ? (
										<Link to={item.path} className="item-link">
											{item.iconPosition === 'left'
												? item.icon
													? item.icon
													: ''
												: ''}
											<span>{item.text}</span>
											{item.iconPosition === 'right'
												? item.icon
													? item.icon
													: ''
												: ''}
										</Link>
									) : (
										<>
											<div
												className={`item-link ${
													droppable ? 'item-link-hovered' : ''
												}`}
												onMouseEnter={openDropdown}
											>
												{item.iconPosition === 'left'
													? item.icon
														? item.icon
														: ''
													: ''}
												<span>{getPathText(location.pathname)}</span>
												{item.iconPosition === 'right'
													? item.icon
														? item.icon
														: ''
													: ''}
											</div>
											<Dropdown
												isShown={droppable}
												onMouseLeave={closeDropdown}
											>
												{item.dropdownItems.map((dropdownItem) => (
													<DropdownItem
														key={dropdownItem.text}
														onClick={closeDropdown}
													>
														<Link to={`${item.path}/${dropdownItem.path}`}>
															{dropdownItem.text}
														</Link>
													</DropdownItem>
												))}
											</Dropdown>
										</>
									)}
								</NavigationItem>
							))}
						</NavigationList>

						<Button
							className="bottom-navigation__button"
							color="white"
							background="linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%)"
							borderRadius="19px"
						>
							<span>+ Разместить объявление</span>
						</Button>
					</div>
				</Container>
			</nav>
		</header>
	);
};
