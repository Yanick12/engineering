import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const adminEmail = "admin@solutum.com"
const hashedPassword = "$2b$10$9F1TEI3KHkjHyat8biCE3eCDGaXW7Jr/8nGHRLPyUUNB5VcmFoTqi"

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
     async authorize(credentials) {
  if (credentials.email !== adminEmail) {
    // Mauvais email, retourne null pour échec auth
    return null
  }

  const isMatch = await bcrypt.compare(credentials.password, hashedPassword)
  if (!isMatch) {
    // Mauvais mot de passe, retourne null
    return null
  }

  // Auth réussie, retourne utilisateur
  return { id: 1, name: "Admin", email: adminEmail }
}
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'solutumSecret',
})
