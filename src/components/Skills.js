import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useCallback, useContext, useEffect } from 'react';
import SkillsContext from '../store/SkillsContext';
import Spinner from './Spinner';

const Skills = () => {
	const { dispatch, skills, isLoading, error } = useContext(SkillsContext);

	const removeSkillHandler = async (e) => {
		dispatch({ type: 'DELETE_START' });
		const skill = e.target.innerText;
		try {
			const updatedSkills = skills.filter((item) => item.name !== skill);
			await axios.delete('/api/remove-skill', {
				data: { name: skill },
			});

			dispatch({ type: 'DELETE_SUCCESS', payload: updatedSkills });
		} catch (error) {
			console.log(error);
			dispatch({ type: 'DELETE_ERROR', payload: error });
			throw new Error('Something went wrong');
		}
	};

	return (
		<div className='grid grid-cols-2'>
			{isLoading && <Spinner />}
			{error && 'Something went wrong.'}
			{!isLoading &&
				!error &&
				skills.map((skill, i) => (
					<p key={i}>
						<span
							onClick={removeSkillHandler}
							className='flex items-center gap-2 font-mono text-lg'
						>
							<FontAwesomeIcon
								className='h-2 w-2 text-custom-green'
								icon={faArrowRight}
							/>
							{skill.name}
						</span>
					</p>
				))}
			<div></div>
		</div>
	);
};

export default Skills;
