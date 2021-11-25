import { getProviders, signIn } from 'next-auth/react';
import React from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const Admin = ({ providers }) => {
	return (
		<div className='mt-48 self-center input-form'>
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<GoogleLoginButton
						GoogleLoginButton
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
					>
						Sign in with {provider.name}
					</GoogleLoginButton>
				</div>
			))}
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
