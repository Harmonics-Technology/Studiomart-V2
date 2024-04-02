import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { LoginModel, UserService } from '~/services';

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
      async authorize(credentials, req) {
        const body: LoginModel = {
          email: credentials?.username,
          password: credentials?.password,
        };

        try {
          const result = await UserService.loginUser({ requestBody: body });
          console.log({ result });

          if (!result.status) {
            return null;
          }
          return result.data;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});

export { handler as GET, handler as POST };
