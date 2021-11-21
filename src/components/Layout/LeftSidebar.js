import {
	faFacebookSquare,
	faGithub,
	faInstagram,
	faLinkedin,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LeftSidebar = () => {
	return (
		<div className='hidden md:flex flex-col items-center justify-center text-custom-white'>
			<ul className='list-none'>
				<li className='sidebar-btn'>
					<FontAwesomeIcon icon={faGithub} />
				</li>
				<li className='sidebar-btn'>
					<FontAwesomeIcon icon={faInstagram} />
				</li>
				<li className='sidebar-btn'>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</li>

				<li className='sidebar-btn mb-10'>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</li>
				<div className='flex justify-center'>
					<li className='border-l-2 border-gray-200 h-24'></li>
				</div>
			</ul>
		</div>
	);
};

export default LeftSidebar;
