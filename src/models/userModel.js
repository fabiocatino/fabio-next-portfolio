import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		skills: [
			{
				name: { type: String, unique: true },
				level: { type: Number, default: 0 },
			},
		],
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
