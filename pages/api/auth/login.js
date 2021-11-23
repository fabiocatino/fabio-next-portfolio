// import dbConnect from '../../../../src/lib/dbConnect';
// import User from '../../../../src/models/userModel';
// import signToken from '../../../../src/lib/signToken';

// export default async function handler(req, res) {
// 	await dbConnect();
// 	const { email, password } = req.body;

// 	if (req.method === 'POST') {
// 		try {
// 			if (!email || !password) {
// 				res.status(401).json({ message: 'Invalid email or password' });
// 				return;
// 			}
// 			const user = await User.findOne({ email }).select('+password');

// 			if (!user || !(await user.correctPassword(password, user.password))) {
// 				res.status(401).json({ message: 'Invalid email or password' });
// 				return;
// 			}
// 			const token = signToken(user._id);
// 			res.status(201).json({ status: 'success', token });
// 		} catch (error) {
// 			console.log(error);
// 			res.status(400).send(error);
// 		}
// 	}
// }
