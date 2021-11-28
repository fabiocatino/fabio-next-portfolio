import Portal from '@reach/portal';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import uploadPic from '../lib/uploadToCloudinary';
import { projectAtom, statusAtom, tagAtom } from '../store/atoms';
import Button from './Button';
import TagsInput from './TagsInput';

const ProjectModal = () => {
	const { data: session } = useSession();
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [gitHub, setGitHub] = useState('');
	const [externalLink, setExternalLink] = useState('');
	const [image, setImage] = useState('');
	const [isFeatured, setIsFeatured] = useState(false);
	const setProject = useSetRecoilState(projectAtom);
	const setStatus = useSetRecoilState(statusAtom);
	const { tags } = useRecoilValue(tagAtom);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const defaultPic = '/public/project-placeholder-1024x576';

	const onImageChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		let projectPic;
		if (image !== null) {
			projectPic = await uploadPic(image);
		}

		setStatus({ isLoading: true });
		try {
			await axios.post('/api/add-project', {
				name,
				description,
				gitHub,
				externalLink,
				image: projectPic,
				isFeatured,
				tags,
			});
			setProject((oldProject) => [
				...oldProject,
				{
					name,
					description,
					gitHub,
					externalLink,
					image: projectPic ?? defaultPic,
					isFeatured,
					tags,
				},
			]);
			setStatus({ isLoading: false });
		} catch (error) {
			setStatus({ error: false });
			throw new Error('Something went wrong');
		}
	};

	return (
		<>
			{session && (
				<Button size='xl' onClick={toggle}>
					Add Project
				</Button>
			)}

			<Modal isOpen={isOpen} toggle={toggle}>
				<form onSubmit={submitHandler}>
					<ModalHeader>New Project</ModalHeader>

					<ModalBody>
						<div className='flex flex-col gap-5'>
							<input
								onChange={(e) => setName(e.target.value)}
								className='input-form w-full'
								type='text'
								placeholder='Name'
							/>
							<input
								onChange={(e) => setDescription(e.target.value)}
								className='input-form w-full'
								type='text'
								placeholder='Description'
							/>
							<input
								onChange={(e) => setGitHub(e.target.value)}
								className='input-form w-full'
								type='text'
								placeholder='gitHub'
							/>
							<input
								onChange={(e) => setExternalLink(e.target.value)}
								className='input-form w-full'
								type='text'
								placeholder='External Link'
							/>
							<input
								onChange={onImageChange}
								className='w-full h-10 text-slate-lightest'
								type='file'
								placeholder='Image'
								accept='image/*'
							/>
							<div className='flex justify-start items-center space-x-2'>
								<input
									onChange={(e) => setIsFeatured(e.target.checked)}
									className='w-5'
									type='checkbox'
									name='Featured'
								/>
								<label className='text-slate-lightest' htmlFor='Featured'>
									Featured?
								</label>
							</div>
							<p className='text-slate-lightest'>Tags</p>

							<TagsInput />
						</div>
					</ModalBody>
				</form>

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

export default ProjectModal;
