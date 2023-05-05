import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })

    let taskChanger = '';
    if (result.task == 'Personal') {
        taskChanger = 'bg-red-400'
    } else if (result.task == 'Freelance') {
        taskChanger = 'bg-blue-400'
    } else if (result.task == 'Work') {
        taskChanger = 'bg-yellow-200'
    }




    console.log(result)
    return (<>
        
        <div className="bg-white p-2 border borde r-black rounded-full w-[55vw] mt-3 flex justify-between">
          
        <span className="flex text-black items-center ms-1">
        <div className={`circle ${taskChanger}`}></div>{result.content}</span>
        <span className="">{result.time}까지</span>
       
        </div>
        <div className="comment">
            <div className="mt-5 bg-neutral-400 w-full h-40 rounded-xl">
             <Comment _id={props.params.id}/>
            </div>
        </div>
    </>
    )
}

