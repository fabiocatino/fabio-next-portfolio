import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

const Admin = ({ providers }) => {
	const [provider, setProvider] = useState([]);

	useEffect(() => {
		setProvider([providers]);
		console.log(providers);
	}, [providers]);
	return (
		<div className='mt-48 self-center input-form'>
			{provider.length > 0 ? (
				<GoogleLoginButton
					GoogleLoginButton
					onClick={() => signIn(providers.google.id, { callbackUrl: '/' })}
				>
					Sign in with {providers.google.name}
				</GoogleLoginButton>
			) : (
				'Loading'
			)}
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
