import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
		gitHub: { type: String },
		externalLink: { type: String },
		image: { type: String, default: '/project-placeholder-1024x576.jpg' },
		isFeatured: { type: Boolean, required: true, default: false },
		tags: [{ name: { type: String } }],
	},
	{
		timestamps: true,
	}
);

const Project =
	mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
