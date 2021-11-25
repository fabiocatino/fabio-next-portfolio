import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Portal from '@reach/portal';
import SkillsContext from '../store/SkillsContext';

const ModalPage = () => {
	const { skills, dispatch } = useContext(SkillsContext);
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [skill, setSkill] = useState([]);
	const [value, setValue] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		dispatch({ type: 'UPLOAD_START' });
		try {
			const {
				data: { data },
			} = await axios.post('/api/add-skill', { skill });
			dispatch({ type: 'UPLOAD_SUCCESS', payload: [...skills, data] });
		} catch (error) {
			dispatch({ type: 'UPLOAD_ERROR', payload: error });
			throw new Error('Something went wrong');
		}

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
		<>
			<button
				onClick={toggle}
				className='flex border rounded-md 
            border-custom-green text-custom-green h- w-48 items-center  hover:bg-custom-green-transparent  animate-fadedown'
			>
				<p className='p-5 '>Add Skills</p>
			</button>
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
						</div>
					</ModalBody>
					<ModalFooter>
						<button
							onClick={toggle}
							className='text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500'
						>
							Close
						</button>
						<button
							onClick={submitHandler}
							type='submit'
							className='rounded px-6 py-2  border focus:outline-none m-1.5 font-medium 
            				border-custom-green text-custom-green items-center  hover:bg-custom-green-transparent'
						>
							<p className=''>Add Skills</p>
						</button>
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
