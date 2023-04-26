import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"



export default async function Edit(req, res){
   
    
    if(req.method === 'POST'){
      console.log(req.body)
        if(req.body.title == ''){
          res.status(200).json('수정해주세요')
        }
        try {
          const db = (await connectDB).db('todo')
          let result = await db.collection('post').updateOne({_id : new ObjectId(req.body._id)}, 
            { $set : { task : req.body.task , title : req.body.title, content : req.body.content, time : req.body.time}})
              return  res.status(200).redirect(302, '/list')
        } catch (error) {
          console.log(error)
        }
       
        
    }
}