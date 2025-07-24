import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Exemple simple
        return { id: "1", name: "Admin", email: credentials.email };
      }
    })
  ],
  session: {
    strategy: "jwt"
  }
});

export { handler as GET, handler as POST };



