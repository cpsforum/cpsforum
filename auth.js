import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      tenantId: process.env.AUTH_MICROSOFT_ENTRA_ID_TENANT_ID,
    }),
  ],
  callbacks: {
    jwt({ token, account, user }) {
      if (account && user) {
        const userId = JSON.parse(Buffer.from(account.access_token.split('.')[1], 'base64').toString()).oid
        return { ...token, accessToken: account.access_token, userId: userId}
      }
      return token
      // ...
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      session.user.userId = token.userId
      return session
    }
  },
})