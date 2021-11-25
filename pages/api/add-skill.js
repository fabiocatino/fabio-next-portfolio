import { getSession } from 'next-auth/react';
import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();
	const session = await getSession({ req });
	const { email } = session;
	const { skill: skills } = req.body;
	if (req.method === 'POST') {
		try {
			const user = await User.findOne({ email });

			await User.findOneAndUpdate({ email }, { $addToSet: { skills } });
			res.status(200).json({ status: 'success', data: skills });
			user.save();
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 'error',
				message: "Couldn't add new skills, try again later.",
			});
		}
	}
}
