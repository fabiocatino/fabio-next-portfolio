import { getSession } from 'next-auth/react';
import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/UserModel';

export default async function handler(req, res) {
	// const session = await getSession({ req });
	// const {
	// 	user: { _id },
	// } = session;
	await dbConnect();
	const { name, link, startDate, endDate, roles, duties } = req.body;
	if (req.method === 'POST') {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: '619f6d245e2c77d9c0052c62' },
				{
					$addToSet: {
						jobs: [
							{
								name,
								link,
								startDate,
								endDate,
								roles,
								duties,
							},
						],
					},
				}
			);
			user.save();
			res.status(200).json({ status: 'success', data: user });
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 'error',
				message: "Couldn't create a new project, try again later.",
			});
		}
	}
}
