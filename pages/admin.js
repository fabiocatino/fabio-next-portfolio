import { getProviders, signIn } from 'next-auth/react';
import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const Admin = ({ providers }) => {
	return (
		<div className='mt-48 self-center input-form'>
			<GoogleLoginButton
				GoogleLoginButton
				onClick={() => signIn(providers?.google?.id, { callbackUrl: '/' })}
			>
				Sign in with {providers?.google?.name}
			</GoogleLoginButton>
		</div>
	);
};

export default Admin;

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: { providers },
	};
}
