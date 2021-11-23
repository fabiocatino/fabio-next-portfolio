import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import '../public/global.css';
import Layout from '../src/components/Layout/Layout';
import '../public/nprogress.css';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const router = useRouter();
	const errorPage = router.pathname === '/_error';

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
	}, [router.events]);

	return (
		<>
			{!errorPage ? (
				<SessionProvider session={session}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SessionProvider>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
