import dbConnect from '../../../src/lib/dbConnect';
import User from '../../../src/models/userModel';

export default async function handler(req, res) {
	await dbConnect();
	if (req.method === 'GET') {
		const user = await User.find({email: 'fabivs9@gmail.com'})
    
        res.status(200).json({user})
	}
}
