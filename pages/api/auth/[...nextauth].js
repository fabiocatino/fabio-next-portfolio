// import NextAuth from 'next-auth';
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientPromise from '../../../src/lib/mongodb';
// import GoogleProvider from 'next-auth/providers/google';

// export default async function auth(req, res) {
// 	return await NextAuth(req, res, {
// 		providers: [
// 			GoogleProvider({
// 				clientId: process.env.GOOGLE_CLIENT_ID,
// 				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 			}),
// 		],
// 		adapter: MongoDBAdapter({
// 			db: (await clientPromise).db('portfolio'),
// 		}),
// 		secret: process.env.JWT_SECRET,

// 		pages: {
// 			signIn: '/admin',
// 		},
// 		callbacks: {
// 			async signIn({ account, profile }) {
// 				if (account.provider === 'google') {
// 					return (
// 						profile.email_verified &&
// 						profile.email === process.env.EMAIL_USERNAME
// 					);
// 				}
// 				return true;
// 			},

// 			async session({ session, user }) {
// 				session.user.isAdmin = user.isAdmin;
// 				return session;
// 			},
// 		},
// 	});
// }

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],

	pages: {
		signIn: '/admin',
	},
	callbacks: {
		async session({ session, token }) {
			session.user.isAdmin = user.isAdmin;

			return session;
		},
		async signIn({ account, profile }) {
			if (account.provider === 'google') {
				return (
					profile.email_verified && profile.email === process.env.EMAIL_USERNAME
				);
			}
			return true; // Do different verification for other providers that don't have `email_verified`
		},
	},
});
