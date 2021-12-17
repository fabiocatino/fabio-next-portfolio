import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		title: { type: String },
		description: { type: String },
		jobs: [
			{
				name: { type: String },
				link: { type: String },
				startDate: { type: String },
				endDate: { type: String, default: 'Present' },
				role: { type: String },
				duties: [{ name: { type: String } }],
				addedAt: { type: Date, default: Date.now },
			},
		],
		skills: [
			{
				name: { type: String },
				level: { type: Number, default: 0 },
			},
		],
		socials: [
			{
				name: { type: String, required: true },
				link: { type: String, required: true },
			},
		],
		email: { type: String },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
