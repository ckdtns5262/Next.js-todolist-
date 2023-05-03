import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

    const db = (await connectDB).db('todo')
    const result = await db.collection('comment').find({parent : new ObjectId(req.query)}).toArray()
    res.status(200).json(result)
}