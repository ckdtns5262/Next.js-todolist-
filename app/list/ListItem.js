'use client'

import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";

export default function ListItem({ result }) {

    return (
        <div>
            {result.map((name, i) =>
                <div key={i} className="list w-11/12 justify-between">
                    <h3>{name.content}</h3>
                    <h3 className="flex items-center space-x-3">
                        <span> {name.time}까지</span>
                        <BsCheckCircle className="text-[24px] hover:text-red-500"
                            onClick={(e) => {
                                fetch('/api/post/delete', { method: 'POST', body: name._id })
                                    .then(() => { console.log('완료') })
                                e.target.parentElement.parentElement.style.opacity = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 1000)
                            }} />
                        <Link href={`/edit/${name._id}`}>
                            <button className="px-2 py-2 bg-blue-600 rounded-lg text-white outline-none focus:ring-4 shadow-lg 
                                                transform active:scale-50 transition-transform ml-2"
                                onClick={() => {
                                  
                                }}
                            >수정</button></Link>
                    </h3>
                </div>
            )}
        </div>
    )
}