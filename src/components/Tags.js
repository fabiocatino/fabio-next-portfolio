import React, { useState } from 'react';
import axios from 'axios';

const Skill = () => {
	const [skill, setSkill] = useState([]);
	const [value, setValue] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = await axios.post('/api/add-skill', { skill });

		setValue('');
		setSkill([]);
	};
	const keyDownHandler = (e) => {
		if (e.keyCode === 32 && value !== '' && skill.length < 5) {
			setSkill([...skill, e.target.value]);
			setValue('');
		}
	};
	return (
		<div className='flex flex-col justify-center items-center mt-56'>
			<form
				onSubmit={submitHandler}
				className='w-full p-4 rounded-md flex flex-col gap-5 flex-wrap items-center'
			>
				<button
					type='submit'
					className='flex ml-7 border rounded-md 
            border-custom-green text-custom-green h-9 w-28 items-center  hover:bg-custom-green-transparent  animate-fadedown'
				>
					<p className='p-5'>Add Skills</p>
				</button>

				<div className='bg-white min-h-16 w-full p-4 rounded-md  flex flex-wrap'>
					<div className='flex justify-start items-center gap-2 flex-wrap'>
						{skill.map((item, i) => (
							<SkillEl skill={skill} setSkill={setSkill} index={i} key={i}>
								{item}
							</SkillEl>
						))}
					</div>
					<div className='flex justify-end p-2'>
						<input
							onKeyDown={keyDownHandler}
							onChange={(e) => setValue(e.target.value.trim())}
							className='rounded-md focus:outline-none focus:ring-0'
							type='text'
							placeholder='Insert tag here'
							value={value}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Skill;

const SkillEl = ({ children, index, skill, setSkill }) => {
	const removeTagHandler = () => {
		setSkill(skill.filter((_, i) => i !== index));
	};

	return (
		<div
			onClick={removeTagHandler}
			className='bg-navy-lightest_navy text-custom-green p-2 rounded-sm'
		>
			{children}
		</div>
	);
};
