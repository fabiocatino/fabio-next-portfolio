import { getSession } from 'next-auth/react';
import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();
	// const session = await getSession({ req });
	// const { email } = session;
	const { name } = req.body;

	if (req.method === 'DELETE') {
		try {
			const user = await User.findOneAndUpdate(
				{ email: 'fabivs9@gmail.com' },
				{ $pull: { skills: { name: name } } }
			);

			res.status(200).json({ status: 'success', data: user.skills });
			user.save();
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't delete the skill, try again later.",
			});
		}
	}
}
