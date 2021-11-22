import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import React from 'react';
import Link from 'next/link'

const Navbar = () => {
	const MenuHandler = () => {};

	return (
		<div className='bg-navy-header flex items-center px-[25px] sm:px-[50px] h-[100px] w-full fixed z-10 shadow-xl'>
			{/* LEFT SIDE */}
			<Link href='/'>
				<svg
					id='logo'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					viewBox='0 0 84 96'
					className='text-custom-green flex justify-center items-center h-10 w-10 animate-fadedown cursor-pointer navBtn'
					fill='none'
				>
					<g transform='translate(-8.000000, -2.000000)'>
						<g transform='translate(11.000000, 5.000000)'>
							<path
								className=''
								d='M 30.079 60.96 L 30.079 26.404 L 51.594 26.404 L 51.594 30.603 L 35.72 30.603 L 35.72 41.24 L 51.594 41.24 L 51.594 45.432 L 35.72 45.432 L 35.72 60.96 Z'
								fill='currentColor'
							></path>

							<polygon
								id='Shape'
								stroke='currentColor'
								stroke-width='5'
								stroke-linecap='round'
								stroke-linejoin='round'
								points='39 0 0 22 0 67 39 90 78 68 78 23'
							></polygon>
						</g>
					</g>
				</svg>
			</Link>

			{/* MIDDLE SIDE */}

			<div className='hidden md:flex justify-end flex-grow gap-7 text-[16px] font-mono'>
				{navLinks.map((link, index) => (
					<Transition
						key={link.id}
						show={true}
						appear={true}
						enter='transition opacity-0 duration-1000 ease-in-out'
						enterFrom='transform -translate-y-5 transition opacity-0  duration-1000 ease-in-out'
						enterTo='opacity-100 translate-y-0 transform duration-1000 ease-in-out'
						style={{ transitionDelay: `${index * 500}ms` }}
					>
						<button key={link.id} className='navBtn'>
							<span className='text-custom-green '>{link.num}</span>
							<p className='navP'>{link.text}</p>
						</button>
					</Transition>
				))}
			</div>
			<FontAwesomeIcon
				onClick={MenuHandler}
				className='delay md:hidden h-10 w-10 text-custom-green absolute right-5 cursor-pointer  animate-fadedown'
				icon={faBars}
			/>
			{/* RIGHT SIDE */}

			<button
				className='hidden md:flex ml-7 border rounded-md 
            border-custom-green text-custom-green h-9 w-20  items-center justify-center hover:bg-custom-green-transparent  animate-fadedown'
			>
				<p className='p-5'>CV</p>
			</button>
		</div>
	);
};

export default Navbar;

const navLinks = [
	{
		id: 1,
		num: 0o1,
		text: 'About',
	},
	{
		id: 2,
		num: 0o2,
		text: 'Work',
	},
	{
		id: 3,
		num: 0o3,
		text: 'Contact',
	},
];
