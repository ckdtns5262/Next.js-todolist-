import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"



export default async function Delete(req, res){

    let session = getServerSession(authOptions)



    if(req.method == "POST"){
        try {
            const db = (await connectDB).db('todo')
            let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
            
        } catch (error) {
            res.status(500).end()
        }
    }

   

}