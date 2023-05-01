import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"



export default async function Delete(req, res){

    if(req.method == "POST"){
        try {
            const db = (await connectDB).db('todo')
            let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)})
            
        } catch (error) {
            res.status(500).end()
        }
    }

   

}