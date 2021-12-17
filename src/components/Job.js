import React from 'react';

const Job = ({ name, setIndex, i, index }) => {
	return (
		<section className='sm:border-t-2 md:border-t-0 md:border-l-2 relative border-l-navy-lightest_navy py-2 px-5 hover:bg-navy-light focus:hover:bg-navy-light'>
			<button
				onClick={() => setIndex(i)}
				className={`${
					i === index ? 'text-custom-green' : 'text-slate'
				} text-mono w-10 flex justify-center`}
			>
				{name}
			</button>
		</section>
	);
};

export default Job;
