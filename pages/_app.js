import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import '../public/global.css';
import '../public/nprogress.css';
import Layout from '../src/components/Layout/Layout';

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
					<RecoilRoot>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</RecoilRoot>
				</SessionProvider>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
