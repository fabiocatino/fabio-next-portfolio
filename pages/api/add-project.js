import { getSession } from 'next-auth/react';
import dbConnect from '../../src/lib/dbConnect';
import Project from '../../src/models/projectModel';

export default async function handler(req, res) {
	const session = await getSession({ req });
	const {
		user: { _id },
	} = session;
	await dbConnect();
	const { name, description, gitHub, externalLink, image, isFeatured, tags } =
		req.body;
	if (req.method === 'POST') {
		try {
			const project = await Project.create({
				user: _id,
				name,
				description,
				gitHub,
				externalLink,
				image,
				isFeatured,
				tags,
			});

			res.status(200).json({ status: 'success', data: project });
		} catch (error) {
			console.log(error);
			res.status(400).json({
				status: 'error',
				message: "Couldn't create a new project, try again later.",
			});
		}
	}
}
