import { getSession } from 'next-auth/react';
import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();
	// const session = await getSession({ req });
	// const {
	// 	user: { email, _id },
	// } = session;
	const {
		skill: skills,
		name,
		link,
		startDate,
		endDate,
		roles,
		duties,
	} = req.body;

	if (req.method === 'POST') {
		if (skills) {
			try {
				const user = await User.findOneAndUpdate(
					{ email },
					{ $addToSet: { skills } }
				);
				user.save();
				res.status(200).json({ status: 'success', data: skills });
			} catch (error) {
				console.log(error);
				res.status(400).json({
					status: 'error',
					message: "Couldn't add new skills, try again later.",
				});
			}
		} else if (name) {
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
					message: "Couldn't add new experience, try again later.",
				});
			}
		}
	}
}

