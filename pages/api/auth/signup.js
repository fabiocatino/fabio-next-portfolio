// import dbConnect from '../../../src/lib/dbConnect';
// import signToken from '../../../src/lib/signToken';
// import User from '../../../src/models/userModel';

// export default async function handler(req, res) {
// 	await dbConnect();
// 	const { name, email, password, password2 } = req.body;

// 	if (req.method === 'GET') {
// 		res.status(200).json({ message: 'we' });
// 	}

// 	if (req.method === 'POST') {
// 		try {
// 			const newUser = await User.create({ name, email, password, password2 });
// 			const token = signToken(newUser._id);
// 			res
// 				.status(201)
// 				.json({ status: 'success', token, data: { user: newUser } });
// 		} catch (error) {
// 			console.log(error);
// 			res.status(400).send(error);
// 		}
// 	}
// }
