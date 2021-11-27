import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredFeaturedProjects } from '../store/atoms';
import Card from './Card';

const Cards = () => {
	const featuredProjects = useRecoilValue(filteredFeaturedProjects);

	return (
		<div>
			{featuredProjects.map((card) => (
				<Card key={card._id} {...card} />
			))}
		</div>
	);
};

export default Cards;
