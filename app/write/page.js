import { connectDB } from "@/util/database"

export default async function Write() {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').find().toArray()

    return (
        <>
            <div className="bg-white p-2 border border-black rounded-full w-[55vw] mt-3">
                <form action="/api/post/write" method="POST" className="justify-between">
                    <input name="content" type="text" className="w-3/4"/>
                    <input name="time" type="time"/>
                    <button className="bg-blue-300 rounded-md border-lime-400 hover:bg-blue-700">등록</button>
                </form>
            </div>
        </>
    )
}