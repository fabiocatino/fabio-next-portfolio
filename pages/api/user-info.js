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
				title: user.title,
			});
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't get the info, try again later.",
			});
		}
	}

	if (req.method === 'PATCH') {
		const { title, description, socials } = req.body;
		// const { name, link } = socials;

		try {
			const user = await User.findOne({ email: process.env.EMAIL_USERNAME });
			// const { socials: userSocials } = user;
			const updatedUser = await User.findOneAndUpdate(
				{
					email: process.env.EMAIL_USERNAME,
				},
				{
					title,
					description,
					// $set: {
					// 	socials: { name: 'Facebook', link: 'https://www.facebook.com' },
					// },
				}
			);
			res.status(200).json({
				status: 'success',
				title,
				description,
				socials,
			});
			updatedUser.save();
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't update the info, try again later.",
			});
		}
	}
}
