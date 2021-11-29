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
			{/* <ul className='list-none'>
				<Link href=''>
					<a target='_blank' rel='noreferrer'>
						<li className='sidebar-btn'>
							<FontAwesomeIcon icon={faGithub} />
						</li>
					</a>
				</Link>
				<li className='sidebar-btn'>
					<FontAwesomeIcon icon={faInstagram} />
				</li>
				<li className='sidebar-btn'>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</li>

				<li className='sidebar-btn mb-10'>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</li> */}
			<div className='flex justify-center mt-10'>
				<div className='border-l-2 border-gray-200 h-24'></div>
			</div>
			{/* </ul> */}
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
					if (social.name === 'Facebook') {
						icon = faFacebookSquare;
					} else if (social.name === 'gitHub') {
						icon = faGithub;
					} else if (social.name === 'instagram') {
						icon = faInstagram;
					} else if (social.name === 'linkedIn') {
						icon = faLinkedinIn;
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
