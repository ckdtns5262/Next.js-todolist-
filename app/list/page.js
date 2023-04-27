import { connectDB } from "@/util/database"
import ListItem from "./ListItem"

export default async function List() {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').find().toArray()
    // console.log(result)

    return (
        <>
            <div className="">
               <ListItem result={result}/>
            </div>
        </>
    )
}