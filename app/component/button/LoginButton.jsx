
'use client'
import {signIn, signOut} from 'next-auth/react'
export default function LoginButton(params) {
    
    return (
        <p onClick={()=>{signIn()}} className="w-3/4">로그인</p>
    )
};
