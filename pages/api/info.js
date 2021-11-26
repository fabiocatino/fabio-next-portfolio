import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();

	if (req.method === 'GET') {
		try {
			const user = await User.findOne({ email: process.env.EMAIL_USERNAME });
			res.status(200).json({
				status: 'success',
				description: user.description,
				socials: user.socials,
			});
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't get the info, try again later.",
			});
		}
	}
}
