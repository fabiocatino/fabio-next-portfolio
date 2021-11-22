import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		gitHub: { type: String },
		link: { type: String },
		images: [{ type: String, required: true }],
		isFeatured: { type: Boolean, required: true },
	},
	{
		timestamps: true,
	}
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
