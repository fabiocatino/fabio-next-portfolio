import Portal from '@reach/portal';
import axios from 'axios';
import React, { useState } from 'react';
import Button from './Button';

const DescriptionModal = ({ description }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const [value, setValue] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await axios.post('/api/add-skill', { skill });
		} catch (error) {
			throw new Error('Something went wrong');
		}

		setValue('');
		setSkill([]);
	};

	return (
		<>
			<Button size='xl' onClick={toggle}>
				Modify description
			</Button>
			<form
				onSubmit={submitHandler}
				className='w-full p-4 rounded-md flex flex-col gap-5 flex-wrap items-center'
			>
				<Modal isOpen={isOpen} toggle={toggle}>
					<ModalHeader>Change your description</ModalHeader>
					<ModalBody>
						<div className='bg-white min-h-16 p-4 rounded-md'>
							<form action=''>
								<textarea
									onChange={(e) => setValue(e.target.value)}
									className='rounded-md focus:outline-none focus:ring-0 min-h-48 w-full '
									value={value}
									name='description'
									id='description'
									cols='30'
									rows='10'
								>
									{description}
								</textarea>
							</form>
						</div>
					</ModalBody>
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

export default DescriptionModal;
