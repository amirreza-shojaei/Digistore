import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyUser } from "@/src/services/auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        phone: { label: "phone", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials?.password) {
          return null;
        }

        const user = await verifyUser({
          phone: String(credentials.phone),
          password: String(credentials.password),
        });

        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          phone: user.phone,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = (user as { phone?: string }).phone;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as { phone?: string }).phone = token.phone as string;
      }
      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
  trustHost: true,
});