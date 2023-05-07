
'use client'

import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const CloseButton = () => {
    const router = useRouter()
  return (
    <button
    className="mt-4 ml-2 border-0 text-white hover:opacity-7 transition absolute" onClick={()=>{router.push('/')}} type="none">
    <AiOutlineArrowLeft size={25} />
  </button>
  )
}

export default CloseButton