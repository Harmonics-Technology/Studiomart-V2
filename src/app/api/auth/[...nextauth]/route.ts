import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import type { LoginModel } from '~/services';
import { UserService } from '~/services';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'username-login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      // @ts-expect-error authorize
      async authorize(credentials) {
        const body: LoginModel = {
          email: credentials?.username,
          password: credentials?.password,
        };

        try {
          const result = await UserService.loginUser({ requestBody: body });

          if (result && result.status) {
            return result.data;
          }
          return null;
        } catch (error) {
          console.error(error);
          return null; // Return null or handle the error as needed
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});

export { handler as GET, handler as POST };
