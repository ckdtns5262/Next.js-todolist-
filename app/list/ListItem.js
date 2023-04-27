'use client'

import EditButton from "../component/button/EditButton"
import { BsCheckCircle } from "react-icons/bs";


export default async function ListItem({ result }) {

    return (
        <div>
            {result.map((name, i) =>
                <div key={i} className="list w-11/12 justify-between">
                    <h3>{name.content}</h3>
                    <h3 className="flex items-center">
                        {name.time}
                        <BsCheckCircle className="text-[24px]" color="red"
                            onClick={(e) => {
                                // fetch('/api/post/delete', { method: 'POST', body: name._id })
                                //     .then(() => { console.log('완료') })
                                // e.target.parentElement.style.opacity = 0;
                                // setTimeout(() => {
                                //     e.target.parentElement.style.display = 'none'
                                // }, 1000)
                            }} />
                        <EditButton name={name} />
                    </h3>
                </div>
            )}
        </div>
    )
}