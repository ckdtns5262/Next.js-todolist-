import { connectDB } from "@/util/database";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import NaverProvider from "next-auth/providers/naver"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"


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
        }), 
        CredentialsProvider({
            name : "credentials",
            credentials : {
                email : {label : "email", type : "text"},
                password : {label : "password", type : "password"},
              
            },
            async authorize(credentials) {
                let db = (await connectDB).db('todo');
                let user = await db.collection('user').findOne({email : credentials.email})
                if(!user) {
                    console.log('해당 이메일은 없음')
                    return null
                }
                const pwcheck = await bcrypt.compare(credentials.password, user.password);
                if(!pwcheck){
                    console.log('비번틀림');
                    return null
                }
                return user
            }
        })
    ],
     // 3. jwt 잘 써야 잘됨 + jwt 만료일설정
     session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60 // 30일
     },
     callbacks : {
        //4. jwt 만들 때 실행되는 코드
        // user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어감
        jwt : async ({token, user, userId})=>{
            if(user){
                token.user = {};
                token.user.name = user.name
                token.user.email = user.email
                token.user.userId = user.userId
                token.user.image = user.image
            }
            return token;
        },
        //5. 유저 세션이 조회될 때마다 실행되는 코드
        session : async ({session, token})=>{
            session.user = token.user;
            return session;
        }
     },
    secret: 'qwer1234',
    adapter: MongoDBAdapter(connectDB)  
}

export default NextAuth(authOptions)