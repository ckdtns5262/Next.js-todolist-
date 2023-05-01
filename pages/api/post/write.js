import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"



export default async function Write(req, res) {

  let session = await getServerSession(req, res, authOptions)


  if (req.method === 'POST') {
    if (session) {
      req.body.author = session.user.email
    }
    const db = (await connectDB).db('todo')
    let result = await db.collection('post').insertOne(req.body)
    return res.status(200).json('처리완료')

  }
}