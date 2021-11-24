import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
		name: { type: String, required: true },
		description: { type: String, required: true },
		links: [{ name: { type: String }, link: { type: String } }],
		images: [{ type: String, required: false }],
		isFeatured: { type: Boolean, required: true, default: false },
	},
	{
		timestamps: true,
	}
);

const Project =
	mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
