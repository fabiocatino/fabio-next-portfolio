import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		image: { type: String },
		password: { type: String, required: true },
		password2: {
			type: String,
			required: true,
			validate: {
				validator: function (el) {
					return el === this.password;
				},
				message: 'Password do not match',
			},
			select: false,
		},
		passwordResetToken: { type: String },
		passwordResetExpires: { type: Date },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', async function () {
	this.password = await bcrypt.hash(this.password, 12);
	this.password2 = undefined;
});

userSchema.methods.correctPassword = async function (verifyPassword, password) {
	return await bcrypt.compare(verifyPassword, password);
};

userSchema.methods.createPasswordResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString('hex');
	this.passwordResetToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
	return resetToken;
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
