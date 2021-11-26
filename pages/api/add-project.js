import dbConnect from '../../src/lib/dbConnect';
import Project from '../../src/models/projectModel';

export default async function handler(req, res) {
	await dbConnect();
	const { user, name, description, gitHub, externalLink, images, isFeatured } = req.body;
	if (req.method === 'POST') {
		try {
			const project = await Project.create({
				user,
				name,
				description,
				gitHub,
				externalLink,
				images,
				isFeatured,
			});

			res.status(200).json({ status: 'success', data: project });
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: "Couldn't create a new project, try again later.",
			});
		}
	}
}
