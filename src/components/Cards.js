import React from 'react';
import { useRecoilValue } from 'recoil';
import {
	filteredFeaturedProjects, statusAtom
} from '../store/atoms';
import Card from './Card';
import Spinner from './Spinner';

const Cards = ({filteredList}) => {
	// const featuredProjects = useRecoilValue(filteredFeaturedProjects);
	const { isLoading, error } = useRecoilValue(statusAtom);

	return (
		<>
			{isLoading && <Spinner />}
			{error && 'Something went wrong.'}
			{!isLoading && !error && (
				<div>
					{filteredList.map((card, i) => (
						<Card key={i} {...card} />
					))}
				</div>
			)}
		</>
	);
};

export default Cards;
