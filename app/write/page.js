import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import AlertLogin from "../component/AlertLogin"

export default async function Write() {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').find().toArray()

    let session = await getServerSession(authOptions)
    

    return (
        <>
        {session? <div className="bg-white p-2 border border-black rounded-full w-[55vw] mt-3">
                <form action="/api/post/write" method="POST" className="justify-between">
                    <input name="content" type="text" className="w-3/4" required="true" autoFocus/>
                    <input name="time" type="time" required="true"/>
                    <button className="bg-blue-300 rounded-md border-lime-400 hover:bg-blue-700">등록</button>
                </form>
            </div> : <AlertLogin/>}
           
        </>
    )
}