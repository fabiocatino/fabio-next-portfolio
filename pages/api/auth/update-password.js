// import dbConnect from '../../../src/lib/dbConnect';
// import User from '../../../src/models/userModel';
// import jwt from 'jsonwebtoken';

// export default async function handler(req, res) {
// 	await dbConnect();
// 	console.log(req)
// 	const token = req.headers.authorization.split(' ')[1];
// 	// if (req.method === 'PATCH') {
// 	// 	const decoded = jwt.verify(token, process.env.JWT_SECRET);
// 	// 	var userId = decoded.id;
// 	// 	console.log(decoded);
// 	//     const { oldPassword, password, password2 } = req.body;
// 	// 	if (!password1 || password1.trim().length < 7) {
// 	// 		res
// 	// 			.status(422)
// 	// 			.json({ message: 'Password should be at least 7 characters.' });
// 	// 		return;
// 	// 	}
// 	// 	const existingUser = await User.findOne({ email });
// 	// 	const isValid = await verifyPassword(oldPassword, existingUser.password);
// 	// 	if (!isValid) {
// 	// 		res.status(403).json({ message: 'Invalid password.' });
// 	// 		return;
// 	// 	}
// 	// 	const hashedPassword = HashPassword(password1);
// 	// 	const newPassword = await User.updateOne(
// 	// 		{ email },
// 	// 		{ password: hashedPassword }
// 	// 	);
// 	// 	res.status(200).send({ message: 'Password updated.' });
// 	// }
// }
