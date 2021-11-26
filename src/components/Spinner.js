import React from 'react';

const Spinner = () => {
	return (
		<div className='flex justify-center items-center'>
			<div
				className='
                        loader
                        ease-linear
                        rounded-full
                        border-8 border-t-8 border-gray-200
                        h-14
                        w-14
    '
			></div>
		</div>
	);
};

export default Spinner;
