import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"


export default async function handler(req, res){
    
    let db = (await connectDB).db('todo')
    const findUserId = await db.collection('user').findOne({userId : req.body.userId})
    const findEmail = await db.collection('user').findOne({email : req.body.email})

        
    if(req.method == 'POST'){
        if(req.body.email == ''){
            res.status(500).json({Error : 'email입력하셈'})
        } else if (req.body.userId == ''){
            res.status(500).json({Error : 'id입력하셈'})
        } else if(req.body.password ==''){
            res.status(500).json({Error : 'pass입력하셈'})
        } 

        
        if(findUserId){
            res.status(500).json({Error : '중복된 id임'})
        } else if(findEmail){
            res.status(500).json({Error : '중복된 email임'})
        } else {
            const hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash
            await db.collection('user').insertOne(req.body)
            res.status(200).json('회원가입 성공')
        }


       
    }
   
}