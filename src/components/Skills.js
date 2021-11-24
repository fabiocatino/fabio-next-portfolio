import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const Skills = () => {
	const [skills, setSkills] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getSkills = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await axios.get('/api/get-skills');
			const {
				data: { data },
			} = res;
			setSkills([...data]);
		} catch (error) {
			throw new Error('Something went wrong');
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		getSkills();
	}, [getSkills]);

	return (
		<div className='grid grid-cols-2'>
			{skills.map((skill, i) => (
				<p key={i}>{skill}</p>
			))}
		</div>
	);
};

export default Skills;
