import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Cards = () => {
	const [otherProjects, setOtherProjects] = useState([]);
	const [featuredProjects, setFeaturedProjects] = useState([]);

	const fetchProjects = async () => {
		try {
			const {
				data: { data },
			} = await axios.get('api/get-projects');
			setFeaturedProjects(
				data.filter((project) => project.isFeatured === true)
			);
			setOtherProjects(data.filter((project) => project.isFeatured === false));
		} catch (error) {
			throw new Error('Could not fetch projects.');
		}
	};
	useEffect(() => {
		fetchProjects();
	}, []);

    return (
		<div>
			{featuredProjects.map((card) => (
				<Card key={card._id} {...card} />
			))}
		</div>
	);
};

export default Cards;
