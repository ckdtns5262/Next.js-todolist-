import { connectDB } from "@/util/database"
import CheckButton from "../component/button/CheckButton"
import EditButton from "../component/button/EditButton"

export default async function List() {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').find().toArray()
    // console.log(result)

    return (
        <>
            <div className="">
                {result.map((name, i) =>
                    <div key={i} className="list w-11/12 justify-between">
                        <h3>(){name.title} : {name.content}</h3>
                        <h3 className="flex">
                            {name.time}
                            <CheckButton/>
                            <EditButton name={name}/>
                        </h3>
                    </div>
                )}
            </div>
        </>
    )
}