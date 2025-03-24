
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import {credentialsAuth } from "./app/lib/api_utils";

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(c) {
      const result = await credentialsAuth(c?.email, c?.password)
      return result
    },
  }),
  Google,
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

const config = {
  debug: true,
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  providers: providers,
  pages: {
    signIn: `${process.env.URL}/auth/signin`,
    signOut: `${process.env.URL}/auth/signout`,
    error: `${process.env.URL}/auth/error`,
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        if (!profile) {
          throw new ReferenceError();
        }
        //if (!await userEmailExists(profile.email)){
        //  return `/auth/signupOAuth?email=${profile?.email}&name=${profile?.name}`
        //}
      }
      return true;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    },

  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
