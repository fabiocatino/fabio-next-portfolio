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
	secret: process.env.JWT_SECRET,

	pages: {
		signIn: '/admin',
	},
	callbacks: {
		async session({ session, token }) {
			session.user.username = session.user.name
				.split(' ')
				.join('')
				.toLocaleLowerCase();
			session.user.uid = token.sub;

			return session;
		},
		async signIn({ account, profile }) {
			if (account.provider === 'google') {
				return (
					profile.email_verified && profile.email === process.env.EMAIL_USERNAME
				);
			}
			return true;
		},
	},
});
