import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"




export default async function Edit(props) {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })
    // console.log(result)


    return (
        <div className="bg-white p-2 border border-black rounded-full w-[55vw]  ">
            <form action="/api/post/edit" method="POST" className="justify-between">
                <input name="task" type="text" defaultValue={result.task} />
                <input name="title" type="text" defaultValue={result.title} />
                <input name="content" type="text" defaultValue={result.content} />
                <input name="time" type="text" defaultValue={result.time} />
                <button className="bg-blue-300 rounded-md border-lime-400 hover:bg-blue-700" type="submit">수정</button>
            </form>
        </div>
    )
}