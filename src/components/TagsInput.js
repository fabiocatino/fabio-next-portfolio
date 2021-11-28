import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { tagAtom } from '../store/atoms';

const TagsInput = () => {
	const [tag, setTag] = useState([]);
	const [value, setValue] = useState('');
	const setTags = useSetRecoilState(tagAtom);

	const keyDownHandler = (e) => {
		if (e.keyCode === 32 && value !== '' && tag.length < 5) {
			setTag([...tag, { name: e.target.value }]);
			setValue('');
			setTags((oldTags) => ({
				...oldTags,
				tags: [...tag],
			}));
		}
	};

	return (
		<div className='h-full'>
			<div className='bg-white min-h-16 w-full p-4 rounded-md  flex flex-wrap'>
				<div className='flex justify-start items-center gap-2 flex-wrap'>
					{tag.map((item, i) => (
						<SkillEl tag={tag} setTag={setTag} index={i} key={i}>
							{item.name}
						</SkillEl>
					))}
				</div>
				<div className='flex justify-end p-2'>
					<input
						onKeyDown={keyDownHandler}
						onChange={(e) => setValue(e.target.value)}
						className='rounded-md focus:outline-none focus:ring-0'
						type='text'
						placeholder='Insert tag here'
						value={value}
					/>
				</div>
			</div>
		</div>
	);
};

export default TagsInput;

const SkillEl = ({ children, index, tag, setTag }) => {
	const removeTagHandler = () => {
		setTag(tag.filter((_, i) => i !== index));
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
