import React from 'react';
import { ButtonSize } from '../../public/theme';

const Button = ({ children, onClick, size, hidden = false }) => {
	const type =
		'md:flex ml-7 border rounded-md border-custom-green text-custom-green  items-center justify-center hover:bg-custom-green-transparent  animate-fadedown';
	const classNames = type + ' ' + ButtonSize[size];
	return (
		<button onClick={onClick} className={`${hidden ? 'hidden' : classNames}`}>
			<p className='px-5'>{children}</p>
		</button>
	);
};

export default Button;
