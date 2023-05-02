
'use client'

import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const CloseButton = () => {
    const router = useRouter()
  return (
    <button
    className="p-1 ml-96 border-0 text-black hover:opacity-7 transition absolute -mt-80" onClick={()=>{router.back()}} type="none">
    <AiOutlineClose size={20} />
  </button>
  )
}

export default CloseButton