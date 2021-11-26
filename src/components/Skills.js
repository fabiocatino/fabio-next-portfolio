import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { skillAtom } from '../store/atoms';
import Spinner from './Spinner';

const Skills = () => {
	const { data: session } = useSession();
	const { skills, error, isLoading } = useRecoilValue(skillAtom);
	const setSkills = useSetRecoilState(skillAtom);
	const removeSkillHandler = async (e) => {
		const skill = e.target.innerText;

		try {
			setSkills((oldSkills) => ({ ...oldSkills, isLoading: true }));

			const updatedSkills = skills.filter((item) => item.name !== skill);
			await axios.delete('/api/remove-skill', {
				data: { name: skill },
			});

			setSkills((oldSkills) => ({ ...oldSkills, skills: updatedSkills, isLoading: false }));
		} catch (error) {
			setSkills((oldSkills) => ({ ...oldSkills, error: true }));
			throw new Error('Something went wrong');
		}
	};

	return (
		<div className='grid grid-cols-2'>
			{isLoading && <Spinner />}
			{error && 'Something went wrong.'}
			{!isLoading &&
				skills.map((skill, i) => (
					<p key={i}>
						<span
							onClick={session ? removeSkillHandler : null}
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
