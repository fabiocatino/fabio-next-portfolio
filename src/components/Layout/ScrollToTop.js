import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => {
				if (window.scrollY >= '200') {
					setVisible(true);
				} else {
					setVisible(false);
				}
			});
		}
	}, [visible]);

	return (
		<>
			{visible ? (
				<button
					onClick={() => router.push('/#')}
					className='z-10 flex h-10 w-10 p-2 bg-custom-green rounded-full fixed bottom-5 4xsm:right-2 right-24  justify-center items-center shadow-lg'
				>
					<FontAwesomeIcon className='h-5' icon={faArrowUp} />
				</button>
			) : null}
		</>
	);
};

export default ScrollToTop;
