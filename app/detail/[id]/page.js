import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })
    console.log(result)
    return (<>
        <h4 className="text-2xl text-white font-bold">상세 페이지</h4>
        <div className="bg-white p-2 border border-black rounded-full w-[55vw] mt-3 flex space-between">
        <span className="text-black">{result.content}</span>
        <span>{result.time}까지</span>
        </div>
        <div className="comment">
            <div className="mt-5 bg-neutral-400 w-full h-40 rounded-xl">
             <Comment _id={props.params.id}/>
            </div>
        </div>
    </>
    )
}

