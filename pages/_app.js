import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import '../public/global.css';
import '../public/nprogress.css';
import Layout from '../src/components/Layout/Layout';
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const router = useRouter();
	const errorPage = router.pathname === '/_error';

	useEffect(() => {
		router.events.on('routeChangeStart', () => NProgress.start());
		router.events.on('routeChangeComplete', () => NProgress.done());
	}, [router.events]);

	return (
		<>
			<Script
				id='ga'
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
			/>

			<Script id='ga1' strategy='lazyOnload'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>

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
