import Portal from '@reach/portal';
import axios from 'axios';
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom } from '../store/atoms';
import Button from './Button';

const ModalPage = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { skills } = useRecoilValue(userAtom);
	const setSkills = useSetRecoilState(userAtom);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [skill, setSkill] = useState([]);
	const [value, setValue] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();
		setSkills((oldSkills) => ({ ...oldSkills, isLoading: true }));

		if (skill.length === 0) return;
		try {
			await axios.post('/api/add-skill', { skill });
			setSkills((oldSkills) => ({
				...oldSkills,
				isLoading: false,
				skills: [...skills, ...skill],
			}));
		} catch (error) {
			setSkills({ error: true });
			throw new Error('Something went wrong');
		}

		setValue('');
		setSkill([]);
	};
	const keyDownHandler = (e) => {
		if (e.keyCode === 32 && value !== '' && skill.length < 5) {
			setSkill([...skill, { name: e.target.value }]);
			setValue('');
		}
	};

	return (
		<>
			<Button size='xl' onClick={toggle}>
				Add Skills
			</Button>
			<form
				onSubmit={submitHandler}
				className='w-full p-4 rounded-md flex flex-col gap-5 flex-wrap items-center'
			>
				<Modal isOpen={isOpen} toggle={toggle}>
					<ModalHeader>Add or remove skills</ModalHeader>
					<ModalBody>
						<div className='flex flex-col justify-center items-center h-48'>
							<div className='bg-white min-h-16 w-full p-4 rounded-md  flex flex-wrap'>
								<div className='flex justify-start items-center gap-2 flex-wrap'>
									{skill.map((item, i) => (
										<SkillEl
											skill={skill}
											setSkill={setSkill}
											index={i}
											key={i}
										>
											{item.name}
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
						</div>
					</ModalBody>
					<ModalFooter>
						<button
							onClick={toggle}
							className='text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500'
						>
							Close
						</button>
						{/* <Button className='h-14 w-48'>Add Skills</Button> */}
						<Button size='lg' onClick={submitHandler} type='submit'>
							Add Skills
						</Button>
					</ModalFooter>
				</Modal>
			</form>
		</>
	);
};

/*Logic*/

const style = {
	body: `flex-shrink flex-grow p-4 bg-navy`,
	headerTitle: `text-2xl md:text-3xl bg-navy text-slate-lightest`,
	content: `relative flex flex-col bg-navy pointer-events-auto w-full`,
	header: `items-start justify-between p-4 border-b border-navy-light`,
	container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0`,
	overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
	footer: `flex flex-wrap items-center justify-end p-3 border-t border-navy-light`,
	orientation: `mt-12 mx-8 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none`,
};

function Modal({ children, isOpen, toggle }) {
	const ref = React.useRef();

	// close modal when you click on "ESC" key
	React.useEffect(() => {
		const handleEscape = (event) => {
			if (!isOpen) return;
			if (event.key === 'Escape') {
				toggle(false);
			}
		};
		document.addEventListener('keyup', handleEscape);
		return () => document.removeEventListener('keyup', handleEscape);
	}, [isOpen, toggle]);

	// hide scrollbar and prevent body from moving when modal is open
	//put focus on modal dialogue
	React.useEffect(() => {
		if (!isOpen) return;

		ref.current?.focus();

		const html = document.documentElement;
		const scrollbarWidth = window.innerWidth - html.clientWidth;

		html.style.overflow = 'hidden';
		html.style.paddingRight = `${scrollbarWidth}px`;

		return () => {
			html.style.overflow = '';
			html.style.paddingRight = '';
		};
	}, [isOpen]);

	return (
		<Portal>
			{isOpen && (
				<>
					<div className={style.overlay} />
					<div className={style.container}>
						<div
							aria-modal={true}
							className={style.orientation}
							ref={ref}
							role='dialogue'
							tabIndex={-1}
						>
							<div className={style.content}>{children}</div>
						</div>
					</div>
				</>
			)}
		</Portal>
	);
}

function ModalHeader({ children }) {
	return (
		<div className={style.header}>
			<h4 className={style.headerTitle}>{children}</h4>
		</div>
	);
}

function ModalBody({ children }) {
	return <div className={style.body}>{children}</div>;
}

function ModalFooter({ children }) {
	return <div className={style.footer}>{children}</div>;
}

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

export default ModalPage;
