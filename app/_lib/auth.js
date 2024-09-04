import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth?.user;
    },
    signIn: async ({ user, profile, account }) => {
      try {
        const existingUser = await getGuest(user?.email);
        if (!existingUser)
          await createGuest({
            email: user.email,
            name: user.name,
          });

        return true;
      } catch {
        return false;
      }
    },

    session: async ({ session, user }) => {
      const guest = await getGuest(session.user?.email);
      session.user.guestId = guest.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});
