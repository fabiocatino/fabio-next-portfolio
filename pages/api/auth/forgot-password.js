// import dbConnect from '../../../../src/lib/dbConnect';
// import sendEmail from '../../../../src/lib/email';
// import User from '../../../../src/models/userModel';

// const URL =
// 	process.env.NODE_ENV === 'production'
// 		? process.env.PRODUCTION_URL
// 		: process.env.DEVELOPMENT_URL;

// export default async function handler(req, res) {
// 	await dbConnect();
// 	const { email } = req.body;

// 	if (req.method === 'POST') {
// 		let user;
// 		try {
// 			user = await User.findOne({ email });
// 			if (!user) {
// 				res.status(404).json({ status: 'error', message: 'User not found.' });
// 			}

// 			const resetToken = user.createPasswordResetToken();
// 			await user.save({ validateBeforeSave: false });

// 			const resetURL = `${URL}/api/v1/auth/reset-password/${resetToken}`;

// 			const message = `Forgot your password? Go to ${resetURL} to reset it.`;

// 			await sendEmail({ email, subject: 'Password reset', message });
// 			res
// 				.status(200)
// 				.json({ status: 'success', message: 'Reset password email sent' });
// 		} catch (error) {
// 			user.passwordResetToken = undefined;
// 			user.passwordResetExpires = undefined;
// 			await user.save({ validateBeforeSave: false });
// 			res.status(500).json({
// 				status: 'error',
// 				message:
// 					'There was an error trying to send you an email. Please, try again later.',
// 			});
// 		}
// 	}
// }
