import { connectDB } from "@/util/database";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import NaverProvider from "next-auth/providers/naver"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"



const GITHUB_CLIENT_ID = process.env.NEXT_APP_GITHUB_CLIENT_ID
const GITHUB_SECRET_ID = process.env.NEXT_APP_GITHUB_SECRET_ID
const GOOGLE_CLIENT_ID = process.env.NEXT_APP_GOOGLE_CLIENT_ID
const GOOGLE_SECRET_ID = process.env.NEXT_APP_GOOGLE_SECRET_ID
const NAVER_CLIENT_ID = process.env.NEXT_APP_NAVER_CLIENT_ID
const NAVER_SECRET_ID = process.env.NEXT_APP_NAVER_SECRET_ID
export const authOptions = {
    
    providers: [
        GithubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_SECRET_ID,
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET_ID
        }),
        NaverProvider({
            clientId : NAVER_CLIENT_ID,
            clientSecret : NAVER_SECRET_ID
        })
    ],
    secret: 'qwer1234',
    adapter: MongoDBAdapter(connectDB)
}

export default NextAuth(authOptions)