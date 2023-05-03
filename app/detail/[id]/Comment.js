'use client'
import {React, useEffect, useState} from 'react'

const Comment = ({_id}) => {

    const [comment, setComment] = useState()
    const [data, setData] = useState([])
    
    
    useEffect(()=>{
        fetch('/api/comment/list?id=' + _id)
        .then(r => r.json())
        .then((res)=>{setData(res)})
    },[])

  return (
  <>

  {data.length > 0 ?  
  data.map((a,i)=> <div key={i} className="flex">
        <p>작성자 : {a.writer}</p>
        <p>{a.comment}</p>
        </div> 
    ) : '댓글없음'
   
}
    <h4>댓글만들어지는 부분</h4>
    <input onChange={(e)=>{setComment(e.target.value)}}/>
    <button onClick={()=>{
        fetch('/api/comment/new' , {method : 'POST' , body : JSON.stringify({comment : comment, parent : _id})})
    }}>댓글 작성</button>
    </>
  )
}

export default Comment