import React from 'react';
import { ButtonSize } from '../../public/theme';

const Button = ({ children, onClick, size, hidden = true }) => {
	const type =
		'md:flex  border rounded-md border-custom-green text-custom-green  items-center justify-center hover:bg-custom-green-transparent  animate-fadedown';
	const classNames = type + ' ' + ButtonSize[size];
	return (
		<button onClick={onClick} className={`${hidden === true ? 'hidden' : classNames}`}>
			<p className='px-5'>{children}</p>
		</button>
	);
};

export default Button;
