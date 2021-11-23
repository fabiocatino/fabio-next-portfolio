import dbConnect from '../../../../../src/lib/dbConnect';
import signToken from '../../../../../src/lib/signToken';
import crypto from 'crypto';
import User from '../../../../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();
	const { password, password2 } = req.body;

	if (req.method === 'PATCH') {
		try {
			const hashedToken = crypto
				.createHash('sha256')
				.update(req.query.token)
				.digest('hex');
			const user = await User.findOne({
				passwordResetToken: hashedToken,
				passwordResetExpires: { $gt: Date.now() },
			});

			if (!user) {
				res.status(404).json({
					status: 'error',
					message: 'Token either expired or not valid.',
				});
			}
			user.password = password;
			user.password2 = password2;
			user.passwordResetToken = undefined;
			user.passwordResetExpires = undefined;
			await user.save();

			const token = signToken(user._id);
			res.status(201).json({ status: 'success', token });
		} catch (error) {
			console.log(error);
		}
	}
}
