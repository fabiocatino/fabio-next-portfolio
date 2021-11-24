import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		skills: [{ type: String, unique: true }],
		socials: [
			{
				name: { type: String, required: true },
				link: { type: String, required: true },
				required: false,
			},
		],
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
