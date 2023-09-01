"use client"
import React,{ useState } from 'react'
import Comment from './comment'
import useSWR from "swr"

const Comments = ({post_id,user_id,user_name}) => {
  const [text,setText]=useState("")
  const fetcher = (...args)=>fetch(...args).then((res)=>res.json())
  const { data,mutate,error,isLoading }=useSWR(
    `/api/comment?id=${post_id}`,
    fetcher
  )

  console.log("data",post_id,data)

  

  


  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
        const comment_content={content:text,user_id:user_id,post_id:post_id,user_name:user_name,date:Date.now()}
        const response=await fetch('/api/comment',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(comment_content) 
        })
  
        if(response.status===201){
          
          const res=await response.json()
          console.log("res",res)
          setText("")
          mutate()
          
        }
      }
      catch(err){
        console.log(err)
      }
  }
  
  return (
    <div className='flex justify-center my-4'>
    <div className='flex flex-col sm:w-[75%] w-[90%]'>
        <div className='text-center font-bold sm:text-2xl text-xl my-2 text-white'>Comments</div>
        <div className='flex justify-center border-white border-2 flex-wrap shrink my-4 lg:px-10 md:px-16 px-1 sm:px-1 xs:border-none rounded-lg sm:py-2 py-2'>
            <form className='flex flex-col sm:w-[85%] w-[95%]' onSubmit={handleSubmit}>
            <div><label className='mb-2 text-white'>Enter your comment</label></div>
            <div className=''><input type='text' placeholder='Enter your comment here' className='mb-4 p-2 rounded-lg w-[100%] bg-slate-900' value={text} onChange={(e)=>setText(e.target.value)} /></div>
            <div><button type='submit' className="bg-blue-800 text-center rounded-lg font-bold text-white py-2 px-4">Add</button></div>
            </form>

        </div>
        <div className='flex flex-col'>
        
            {data && data.length>0 && data.map((comment)=>{
                return(<Comment key={comment._id} comment={comment} />)
            })}
            {(!data || data.length==0) && 
            <div className='text-center my-4 text-white text-xl'> 
                There are no Comments.

            </div>}


        </div>
        
    </div>
    </div>
  )
}

export default Comments