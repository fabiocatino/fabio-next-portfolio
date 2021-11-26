import dbConnect from '../../src/lib/dbConnect';
import User from '../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();


	if (req.method === 'GET') {
		console.log(req)
		try {
			const user = await User.findOne({ email: 'fabivs9@gmail.com' });
			res.status(200).json({ status: 'success', data: user.skills });
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't get the data, try again later.",
			});
		}
	}
}
