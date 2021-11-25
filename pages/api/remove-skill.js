import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
	await dbConnect();
	const session = await getSession({ req });
	const { email } = session;
	const { skill } = req.body;
	if (req.method === 'DELETE') {
		try {
			const user = await User.findOne({ email });

			const updatedUser = await User.findOneAndUpdate(
				{ email },
				{ $pull: { skills: skill } }
			);

			res.status(200).json({ status: 'success', data: skill });
			user.save();
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't delete the skill, try again later.",
			});
		}
	}
}
