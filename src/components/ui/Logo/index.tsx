import React from 'react';
import {Link} from 'react-router-dom';
import LogoImg from '../../../assets/images/logo.png';

import './Logo.scss';

type LogoProps = {
	position: 'header' | 'footer';
};

export const Logo: React.FC<LogoProps> = ({position}) => {
	return (
		<Link to={'/'} className={`logo ${position}__logo`}>
			<img src={LogoImg} alt="Логотип" />
		</Link>
	);
};
