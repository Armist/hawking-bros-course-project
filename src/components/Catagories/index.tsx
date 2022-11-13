import React from 'react';
import {Container} from '../Container';

import './Categories.scss';

export const Categories = () => {
	return (
		<div className="categories">
			<Container>
				<div className="categories__inner">
					<div className="categories__cards">
						<div className="categories__card categories__card-big">A</div>
						<div className="categories__card">B</div>
						<div className="categories__card">B</div>
						<div className="categories__card categories__card-big">A</div>
					</div>
					<div className="categories__columns"></div>
				</div>
			</Container>
		</div>
	);
};
