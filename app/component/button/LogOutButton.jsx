
'use client'
import {signOut} from 'next-auth/react'
export default function LoginButton(params) {
    
    return (
        <p onClick={()=>{signOut()}} className="w-3/4">로그아웃</p>
    )
};
