import Portal from '@reach/portal';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userAtom } from '../store/atoms';
import Button from './Button';

const DescriptionModal = () => {
	const { data: session } = useSession();
	const [isOpen, setIsOpen] = React.useState(false);
	const { description, title } = useRecoilValue(userAtom);
	const setSkills = useSetRecoilState(userAtom);
	const [newDescription, setNewDescription] = useState('');
	const [newTitle, setNewTitle] = useState('');
	const [newGitHub, setNewGitHub] = useState('');
	const [newInstagram, setNewInstagram] = useState('');
	const [newFacebook, setNewFacebook] = useState('');
	const [newLinkedIn, setNewLinkedIn] = useState('');
	const [newEmail, setNewEmail] = useState('');

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setSkills((oldSkills) => ({ ...oldSkills, isLoading: true }));
		try {
			await axios.patch('/api/user-info', {
				description: newDescription,
				title,
			});
			setSkills((oldSkills) => ({
				...oldSkills,
				description: newDescription ?? oldSkills.description,
				title: newTitle ?? oldSkills.title,
				isLoading: false,
			}));
		} catch (error) {
			setSkills((oldSkills) => ({ ...oldSkills, error: true }));
			throw new Error('Something went wrong');
		}
	};

	return (
		<>
			{session && (
				<Button size='xl' onClick={toggle}>
					Change title and description
				</Button>
			)}

			<Modal isOpen={isOpen} toggle={toggle}>
				<div className='w-full p-4 rounded-md flex flex-col gap-5 flex-wrap items-center'>
					<form onSubmit={submitHandler}>
						<ModalHeader>Change your title</ModalHeader>

						<ModalBody>
							<div className='bg-white  p-4 rounded-md'>
								<textarea
									onChange={(e) => setNewTitle(e.target.value)}
									className='rounded-md focus:outline-none focus:ring-0 min-h-48 w-full '
									name='title'
									id='title'
									cols='20'
									rows='3'
									defaultValue={title}
								></textarea>
							</div>
						</ModalBody>
						<ModalHeader>Change your description</ModalHeader>
						<ModalBody>
							<div className='bg-white p-4 rounded-md'>
								<textarea
									onChange={(e) => setNewDescription(e.target.value)}
									className='rounded-md focus:outline-none focus:ring-0 min-h-48 w-full '
									name='description'
									id='description'
									cols='20'
									rows='5'
									defaultValue={description}
								></textarea>
							</div>
						</ModalBody>
						<ModalHeader>Change your socials and email</ModalHeader>
						<div className='flex flex-col gap-2 '>
							<input
								className='input-form w-full'
								type='text'
								placeholder='gitHub'
							/>
							<input
								className='input-form w-full'
								type='text'
								placeholder='Instagram'
							/>
							<input
								className='input-form w-full'
								type='text'
								placeholder='Facebook'
							/>
							<input
								className='input-form w-full'
								type='text'
								placeholder='LinkedIn'
							/>
							<input
								className='input-form w-full'
								type='email'
								placeholder='Email'
							/>
						</div>
					</form>
				</div>
				<ModalFooter>
					<button
						onClick={toggle}
						className='text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500'
					>
						Close
					</button>
					<Button size='lg' onClick={submitHandler} type='submit'>
						Apply
					</Button>
				</ModalFooter>
			</Modal>
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

export default DescriptionModal;
