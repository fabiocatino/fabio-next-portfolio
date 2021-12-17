import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const JobDescription = ({
	name,
	link,
	role,
	startDate,
	endDate,
	duties,
	index,
	i,
}) => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<div className='mt-10 md:mt-0'>
			{isVisible && index === i && (
				<section className='space-y-1 '>
					<div className='flex gap-2 items-center'>
						<h1 className='md:first:text-xl text-slate-lightest'>{role}</h1>

						<Link href={link} passHref={true}>
							<a
								target='_blank'
								rel='noreferrer'
								className='text-custom-green font-semibold'
							>
								<p className='text-custom-green md:text-2xl'>@ {name}</p>
							</a>
						</Link>
					</div>
					<div className='text-mono text-slate-light text-sm'>
						{startDate} - {endDate}
					</div>
					<ul className='pt-5 md:pt-2'>
						{duties.map((duty, i) => (
							<li key={i} className='flex gap-2 py-2 items-center text-slate'>
								<FontAwesomeIcon
									className='h-2 w-2 text-custom-green'
									icon={faArrowRight}
								/>
								{duty}
							</li>
						))}
					</ul>
					<div className='flex flex-cols'></div>
				</section>
			)}
		</div>
	);
};

export default JobDescription;
