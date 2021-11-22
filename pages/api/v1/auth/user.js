import User from '../../../../src/models/userModel';
import dbConnect from '../../../../src/lib/dbConnect';

export default async function handler(req, res) {
	await dbConnect();
	console.log(req.body);
	if (req.method !== 'POST') {
		console.log('wee');
		res.status(200).json({ message: 'we' });
	}
	if (req.method === 'POST') {
		try {
			const newUser = await User.create(req.body);
			res.status(201).json({ status: 'success', data: { user: newUser } });
		} catch (error) {
			res.status(400).send(error)
		}
	}
}
