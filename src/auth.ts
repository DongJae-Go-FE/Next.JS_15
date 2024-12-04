import NextAuth from "next-auth";
import bcrypt from "bcryptjs";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./util/database";
import Credentials from "next-auth/providers/credentials";

import { User } from "./model/user-model";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password as string,
              user.password,
            );

            if (isMatch) {
              return user;
            } else {
              throw new Error("비밀번호가 일치하지 않습니다.");
            }
          } else {
            throw new Error("유저를 찾지 못했습니다.");
          }
        } catch (error) {
          throw new Error(`${error}`);
        }
      },
    }),
  ],
});
