import React from 'react';
import type {NavigateFunction} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {DotsIcon} from '../../assets/svg/DotsIcon';
import {HomeIcon} from '../../assets/svg/HomeIcon';
import {NotFoundIcon} from '../../assets/svg/NotFoundIcon';
import {Container} from '../../components/Container';
import {Button} from '../../components/ui/Button';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
	const navigate: NavigateFunction = useNavigate();

	const clickHandler = () => {
		navigate('/');
	};

	return (
		<div className="notfound">
			<div className="notfound__background"></div>
			<Container>
				<div className="notfound__inner">
					<DotsIcon width={60} height={60} />
					<div className="notfound__content">
						<div className="notfound__content-left">
							<h2 className="notfound__content-title">Ошибка 404</h2>
							<p className="notfound__content-text">
								Возможно, у вас опечатка в адресе страницы, или её просто не
								существует
							</p>
							<Button
								className={'notfound__content-button'}
								color={'var(--text-black)'}
								borderRadius={'33px'}
								padding="12px 24px"
								onClick={clickHandler}
							>
								<HomeIcon width={12} height={12} fill="currentColor" />
								<span>Вернуться на главную</span>
							</Button>
						</div>
						<div className="notfound__content-right">
							<NotFoundIcon width={554} height={286} />
						</div>
					</div>
					<DotsIcon width={60} height={60} />
				</div>
			</Container>
		</div>
	);
};
