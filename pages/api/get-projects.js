import dbConnect from '../../src/lib/dbConnect';
import Project from '../../src/models/projectModel';

export default async function handler(req, res) {
	await dbConnect();

	if (req.method === 'GET') {
		try {
			const projects = await Project.find({});
			res.status(200).json({ status: 'success', projects: projects });
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't fetch projects, try again later.",
			});
		}
	}
}
