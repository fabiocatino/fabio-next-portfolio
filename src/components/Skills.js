import React, { useEffect, useState, useCallback, useContext } from 'react';
import axios from 'axios';
import SkillsContext from '../store/SkillsContext';

const Skills = () => {
	const { dispatch, skills, isLoading } = useContext(SkillsContext);

	const getSkills = useCallback(async () => {
		// dispatch({ type: 'FETCHING_START' });

		try {
			const res = await axios.get('/api/get-skills');
			const {
				data: { data },
			} = res;

			dispatch({ type: 'FETCHING_SUCCESS', payload: data });
		} catch (error) {
			// dispatch({ type: 'FETCHING_ERROR', payload: error });
			throw new Error('Something went wrong');
		}
	}, []);
	console.log({skills})

	useEffect(() => {
		getSkills();
	}, [getSkills]);

	return (
		<div className='grid grid-cols-2'>
			{isLoading ? 'LOADING' : skills.map((skill, i) => <p key={i}>{skill}</p>)}
		</div>
	);
};

export default Skills;
