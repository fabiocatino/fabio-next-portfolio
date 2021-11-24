import dbConnect from '../../src/lib/dbConnect';
import Project from '../../src/models/projectModel';

export default async function handler(req, res) {
	await dbConnect();
	const { _id } = req.body;
	if (req.method === 'DELETE') {
		try {
			const project = await Project.findOneAndDelete({
				_id,
			});

			res.status(200).json({ status: 'success', data: project });
		} catch (error) {
			res.status(400).json({
				status: 'error',
				message: 'Unable to delete the project.',
			});
		}
	}
}
