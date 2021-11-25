import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../src/lib/mongodb';
import GoogleProvider from 'next-auth/providers/google';

export default async function auth(req, res) {
	return await NextAuth(req, res, {
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			}),
		],
		adapter: MongoDBAdapter({
			db: (await clientPromise).db('portfolio'),
		}),
		secret: process.env.JWT_SECRET,

		pages: {
			signIn: '/auth/admin',
		},
		callbacks: {
			async signIn({ account, profile }) {
				if (account.provider === 'google') {
					return (
						profile.email_verified &&
						profile.email === process.env.EMAIL_USERNAME
					);
				}
				return true;
			},

			async session({ session, user }) {
				session.user.isAdmin = user.isAdmin;
				return session;
			},
		},
	});
}
