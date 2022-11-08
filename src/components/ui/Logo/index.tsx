import React from 'react';
import {Link} from 'react-router-dom';
import LogoImg from '../../../assets/images/logo.png';

export const Logo = () => {
	return (
		<Link to={'/'} className="logo">
			<img src={LogoImg} alt="Логотип" />
		</Link>
	);
};
