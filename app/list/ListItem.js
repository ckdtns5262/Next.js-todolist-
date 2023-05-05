'use client'

import { BsCheckCircle } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ListItem({ result }) {

    const router = useRouter()

    return (
        <div>
            {/* task 업무별로 구분하여 표시하는 조건 */}
            {result.map((name, i) => {
                let taskChanger = '';
                if (name.task == 'Personal') {
                    taskChanger = 'bg-red-400'
                } else if (name.task == 'Freelance') {
                    taskChanger = 'bg-blue-400'
                } else if (name.task == 'Work') {
                    taskChanger = 'bg-yellow-200'
                }
                return (
                    <div key={i} className="list">
                        <span className={`circle ${taskChanger}`}></span>
                        <h3 onClick={() => router.push(`/detail/${name._id}`)} className="w-4/6 ml-2">{name.content}</h3>
                        <h3 className="flex items-center space-x-3 w-2/6">
                            <span clas> {name.time}까지</span>
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
                )
            })}
        </div>
    )
}