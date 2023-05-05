import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import AlertLogin from "../component/AlertLogin"

export default async function Write() {



    let session = await getServerSession(authOptions)
    

    return (
        <>
        {session? <div className="bg-white p-2 border border-black rounded-full w-[55vw] mt-3">
                <form action="/api/post/write" method="POST" className="">
                  <select name="task">
                    <option value="Personal">Personal</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Work">Work</option>
                  </select>
                    <input name="content" type="text" className="w-4/6" required="true" autoFocus/>
                    <input name="time" type="time" required class="w-1/6 px-2 border rounded-md shadow-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                    {/* <input name="time" type="time" required="true" className="w-1/6"/>     */}
                    <button className="bg-blue-300 rounded-md border-lime-400 hover:bg-blue-700 ml-2">등록</button>
                </form>
            </div> : <AlertLogin/>}
           
        </>
    )
}