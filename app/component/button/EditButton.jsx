'use client'

import Link from "next/link"

export default function EditButton({name}){




    return (
        <>
        <Link href={`/edit/${name._id}`}>
        <button className="px-2 py-2 bg-blue-600 rounded-lg text-white outline-none focus:ring-4 shadow-lg 
        transform active:scale-50 transition-transform"
        onClick={()=>{
            console.log(name._id)
        }}  
        >수정</button></Link>
        </>
    )
}