/* eslint-disable @typescript-eslint/naming-convention */
import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/redux';

import './Header.scss';
import {Link, NavLink} from 'react-router-dom';

import {CgClose, CgHeart, CgMenuRight} from 'react-icons/cg';

import {Logo} from '../ui/Logo';
import {
	bottomNavigationItems,
	topNavigationItems,
} from '../../utils/data/HeaderNavigationData';
import {Button} from '../ui/Button';
import {Dropdown, DropdownItem} from '../ui/Dropdown';
import {Navbar} from './Navbar';
import {NavbarList} from './NavbarList';
import {NavbarItem} from './NavbarItem';

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
			<Navbar type="top">
				<NavbarList>
					{topNavigationItems.map((item) => (
						<NavbarItem type={'top'} key={item.id}>
							<NavLink to={item.path} className="navbar__link">
								{item.icon && item.icon} {item.title}
							</NavLink>
						</NavbarItem>
					))}
				</NavbarList>
				<div className="navbar__buttons">
					<Link to={'/'} className="navbar__button">
						Закладки <CgHeart size={16} />
					</Link>
					<Link to={'/'} className="navbar__button">
						<span>Вход и регистрация</span>
					</Link>
				</div>
			</Navbar>
			<Navbar type="bottom">
				<Logo position="header" />
				<NavbarList type={'bottom'}>
					{bottomNavigationItems.map((item) => (
						<NavbarItem type={'bottom'} key={item.id}>
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
						</NavbarItem>
					))}
				</NavbarList>
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
			</Navbar>
			<Navbar type="adaptive" opened={opened}>
				<div className="navbar__buttons">
					<Link to={'/liked'} className="navbar__button">
						Закладки <CgHeart size={16} />
					</Link>
					<Link to={'/login'} className="navbar__button">
						<span>Вход и регистрация</span>
					</Link>
				</div>
				<NavbarList>
					{topNavigationItems.map((item) => (
						<NavbarItem key={item.id}>
							<NavLink to={item.path} className="navbar__link">
								{item.icon && item.icon} {item.title}
							</NavLink>
						</NavbarItem>
					))}
					{bottomNavigationItems.map((item) => (
						<NavbarItem key={item.id}>
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
						</NavbarItem>
					))}
				</NavbarList>
				<Button className="navbar__button-bordered">
					+ Разместить объявление
				</Button>
			</Navbar>
		</header>
	);
};
