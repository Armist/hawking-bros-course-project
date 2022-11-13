/* eslint-disable @typescript-eslint/naming-convention */
import React, {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchCities} from '../../store/reducers/ActionCreators';

import './Header.scss';
import {Link, NavLink} from 'react-router-dom';

import {CgMenuRight, CgClose, CgHeart} from 'react-icons/cg';

import {Logo} from '../ui/Logo';
import {Container} from '../Container';
import {
	topNavigationItems,
	bottomNavigationItems,
} from '../../utils/data/HeaderNavigationData';
import {Button} from '../ui/Button';
import {Dropdown, DropdownItem} from '../ui/Dropdown';

export const Header = () => {
	const dispatch = useAppDispatch();
	const {cities, isLoading, error} = useAppSelector(
		(state) => state.cityReducer,
	);

	const [dropped, setDropped] = useState<boolean>(false);
	const [opened, setOpened] = useState<boolean>(false);
	const [shown, setShown] = useState<boolean>(false);
	const closeDropdown = () => {
		setDropped(false);
	};

	const openDropdown = () => {
		setDropped(true);
	};

	return (
		<header className={`header ${opened ? 'header-opened' : ''}`}>
			<nav className="navbar top-navbar">
				<Container>
					<div className="navbar__inner">
						<ul className="navbar__list">
							{topNavigationItems.map((item) => (
								<li className="navbar__item top-navbar__item" key={item.id}>
									<NavLink to={item.path} className="navbar__link">
										{item.icon && item.icon} {item.title}
									</NavLink>
								</li>
							))}
						</ul>
						<div className="navbar__buttons">
							<Link to={'/'} className="navbar__button">
								Закладки <CgHeart size={16} />
							</Link>
							<Link to={'/'} className="navbar__button">
								<span>Вход и регистрация</span>
							</Link>
						</div>
					</div>
				</Container>
			</nav>
			<nav className="navbar bottom-navbar">
				<Container>
					<div className="navbar__inner">
						<Logo position="header" />
						<ul className="navbar__list bottom-navbar__list">
							{bottomNavigationItems.map((item) => (
								<li className="navbar__item bottom-navbar__item" key={item.id}>
									<NavLink
										to={item.path}
										className="navbar__link"
										onMouseEnter={item.childs ? openDropdown : undefined}
									>
										{item.title} {item.icon && item.icon}
									</NavLink>
									{item.childs && (
										<Dropdown isShown={dropped} onMouseLeave={closeDropdown}>
											{item.childs.map((child) => (
												<DropdownItem key={child.id}>
													<Link to={child.path}>{child.title}</Link>
												</DropdownItem>
											))}
										</Dropdown>
									)}
								</li>
							))}
						</ul>
						<Button className="navbar__button-bordered">
							+ Разместить объявление
						</Button>
						<Button
							className="burger"
							onClick={() => {
								setOpened(!opened);
							}}
						>
							{!opened ? (
								<CgMenuRight size={18} color={'var(--text-black)'} />
							) : (
								<CgClose size={18} />
							)}
						</Button>
					</div>
				</Container>
			</nav>
			<nav
				className={`adaptive-navbar ${opened ? 'adaptive-navbar-open' : ''}`}
			>
				<Container>
					<div className="adaptive-navbar__inner">
						<div className="navbar__buttons">
							<Link to={'/liked'} className="navbar__button">
								Закладки <CgHeart size={16} />
							</Link>
							<Link to={'/login'} className="navbar__button">
								<span>Вход и регистрация</span>
							</Link>
						</div>
						<ul className="navbar__list">
							{topNavigationItems.map((item) => (
								<li className="navbar__item" key={item.id}>
									<NavLink to={item.path} className="navbar__link">
										{item.icon && item.icon} {item.title}
									</NavLink>
								</li>
							))}
							{bottomNavigationItems.map((item) => (
								<li className="navbar__item" key={item.id}>
									<Button
										className={`navbar__link ${
											item.childs ? 'navbar__link-parent' : ''
										} ${shown ? 'clicked' : ''}`}
										onClick={() => {
											setShown(!shown);
										}}
									>
										{item.title} {item.icon && item.icon}
									</Button>
									{item.childs && shown && (
										<ul className="cities__list">
											{item.childs.map((child) => (
												<li key={child.id} className="cities__item">
													<Link to={child.path}>{child.title}</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
						<Button className="navbar__button-bordered">
							+ Разместить объявление
						</Button>
					</div>
				</Container>
			</nav>
		</header>
	);
};
