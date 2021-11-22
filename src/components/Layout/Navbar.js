import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition } from '@headlessui/react';
import React from 'react';

const Navbar = () => {
	const MenuHandler = () => {};

	return (
		<div className='bg-navy-header flex items-center px-[25px] sm:px-[50px] h-[100px] w-full fixed z-10 shadow-xl'>
			{/* LEFT SIDE */}
			<div className='h-10 w-10 rounded-full border- border-2 border-custom-green flex hover:bg-green-900 cursor-pointer animate-fadedown'>
				<h3 className='text-custom-green flex justify-center items-center w-full'>
					F
				</h3>
			</div>

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
					>
						<button
							key={link.id}
							// style={{ transitionDelay: `${index * 500}ms` }}
							className='navBtn'
						>
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
