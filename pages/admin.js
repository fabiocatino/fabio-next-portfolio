import React, { useRef } from 'react';

const Admin = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const submitHandler = async (e) => {
		e.preventDefault();
	};

	return (
		<div className='mt-48'>
			<form
				onSubmit={submitHandler}
				className='mt-48 flex flex-col items-center gap-5'
			>
				<input
					ref={emailRef}
					className='input-form'
					type='email'
					placeholder='Email'
					required
				/>
				<input
					ref={passwordRef}
					className='input-form'
					type='password'
					placeholder='Password'
					required
				/>
				<button
					type='submit'
					className='border border-1 border-custom-green text-custom-green mt-5 p-4 w-40 rounded-md 
											bg-transparent hover:bg-custom-green-transparent'
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Admin;
