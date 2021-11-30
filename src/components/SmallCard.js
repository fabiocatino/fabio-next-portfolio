import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faExternalLinkAlt,
	faEye,
	faEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SmallCard = ({
	description,
	externalLink = '/',
	gitHub = '/',
	image,
	name,
	tags,
}) => {
	const [showImage, setShowImage] = useState(false);
	return (
		<div onClick={() => setShowImage(!showImage)}>
			<div
				className={`${
					showImage ? 'animate-fadedown ease-in-out' : 'hidden'
				} relative `}
			>
				<Image height={300} width={400} src={image} alt={name} />
			</div>
			<div className='bg-navy-light p-5 mt-10 hover:scale-105 transition duration-300 ease-out cursor-pointer rounded-md shadow-md'>
				<div className='h-72 p-5'>
					<div className='flex justify-between items-center py-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							role='img'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							className='text-custom-green h-10 w-10'
						>
							<title>Folder</title>
							<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
						</svg>

						<div className='flex gap-2  text-custom-white'>
							<Link href={gitHub} passHref={true}>
								<a
									target='_blank'
									rel='noreferrer'
									className='text-custom-green font-semibold'
								>
									<FontAwesomeIcon
										className='h-5 w-10 navBtn '
										icon={faGithub}
									/>
								</a>
							</Link>
							<Link href={externalLink} passHref={true}>
								<a
									target='_blank'
									rel='noreferrer'
									className='text-custom-green font-semibold'
								>
									<FontAwesomeIcon
										className='h-5 w-10 navBtn '
										icon={faExternalLinkAlt}
									/>
								</a>
							</Link>
						</div>
					</div>
					<button className='text-custom-green flex gap-5 items-center pt-2'>
						{showImage ? 'Hide preview' : 'Show preview'}
						<FontAwesomeIcon
							className='h-5 w-10 navBtn'
							icon={showImage ? faEye : faEyeSlash}
						/>
					</button>
					<div className='mt-5 '>
						<h1 className='text-xl text-slate-light mb-5'>{name}</h1>
						<p className='text-base text-slate font-semibold my-5'>
							{description}
						</p>
					</div>

					<div className='flex font-mono gap-x-5 mt-2 text-left text-base text-slate font-semibold flex-wrap'>
						{tags.map((tag) => (
							<p key={tag.name}>{tag.name}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallCard;
