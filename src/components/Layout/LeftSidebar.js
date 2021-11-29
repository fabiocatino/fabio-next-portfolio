import {
	faFacebookSquare,
	faGithub,
	faInstagram,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';

const LeftSidebar = ({ socials }) => {
	return (
		<div className='hidden md:flex flex-col items-center justify-center text-custom-white'>
			<SocialLinks socials={socials}></SocialLinks>
			<div className='flex justify-center mt-10'>
				<div className='border-l-2 border-gray-200 h-24'></div>
			</div>
		</div>
	);
};

export default LeftSidebar;

const SocialLinks = ({ socials }) => {
	return (
		<div className='hidden md:flex flex-col items-center justify-center text-custom-white'>
			<ul className='list-none'>
				{socials.map((social) => {
					let icon;
					if (social.name === 'LinkedIn') {
						icon = faLinkedinIn;
					} else if (social.name === 'gitHub') {
						icon = faGithub;
					} else if (social.name === 'Instagram') {
						icon = faInstagram;
					} else if (social.name === 'Facebook') {
						icon = faFacebookSquare;
					}
					return (
						<Link key={social._id} href={social.link}>
							<a target='_blank' rel='noreferrer'>
								<li className='sidebar-btn'>
									<FontAwesomeIcon icon={icon} />
								</li>
							</a>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
