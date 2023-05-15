'use client'


import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DarkMode(){

    let 쿠키값 = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
    
    let router = useRouter()

    useEffect(()=>{
        if(쿠키값 == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    },[])

    return (
        <div className="flex items-end justify-end space-x-2 mr-12 text-lg">
        <button onClick={()=>{
             if(쿠키값 =='light'){
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 *400)
                router.refresh()
            } else {
                document.cookie = 'mode=light; max-age=' + (3600 * 24 *400)
                router.refresh()
            }
        }}>{쿠키값 == 'dark' ? '🌕' : '🌑'}
          </button>
          <p>
            {쿠키값 == 'dark' ? 'Light' : 'Dark'}
            </p>
        </div>
    )
}