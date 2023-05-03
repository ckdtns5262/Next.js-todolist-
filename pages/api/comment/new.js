import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(req, res){

    let session = await getServerSession(req,res, authOptions)
    const db = (await connectDB).db('todo')

    if(req.method == 'POST'){
        req.body = JSON.parse(req.body)

        let data = {
            comment : req.body.comment,
            parent : new ObjectId(req.body.parent),
            author : session.user.email,
            writer : session.user.name
        }
       
        const result = await db.collection('comment').insertOne(data)
        res.status(200).json('댓글완료')
    }
}