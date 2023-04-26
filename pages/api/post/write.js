import { connectDB } from "@/util/database"



export default async function Write(req, res){
   
    if(req.method === 'POST'){
        console.log(req.body)
        const db = (await connectDB).db('todo')
        let result = await db.collection('post').insertOne(req.body)
      return  res.status(200).json('처리완료')
        
    }
}