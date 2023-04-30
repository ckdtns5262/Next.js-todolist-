import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {

    providers : [
        GithubProvider({
            clientId : '4da54067824ccde636d2',
            clientSecret : 'ec7688b77fbae4aed467b3fbe829a02f86d779ff',
        })
    ], 
    secret : 'qwer1234'
}

export default NextAuth(authOptions)