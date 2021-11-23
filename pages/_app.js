import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import '../public/global.css';
import Layout from '../src/components/Layout/Layout';
import '../public/nprogress.css';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const errorPage = router.pathname === '/_error';

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
	}, [router.events]);

	return (
		<>
			{!errorPage ? (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
