import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
	await dbConnect();
	const session = await getSession({ req });
	const { email } = session;

	if (req.method === 'GET') {
		try {
			const user = await User.findOne({ email })
			res.status(200).json({ status: 'success', data: user.skills });

		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't get the data, try again later.",
			});
		}
	}
}
