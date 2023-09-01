"use client"
import React,{ useState } from 'react'
import Comments from './comments'
import Link from 'next/link'
import useSWR from "swr"

const Post = ({post,liked,id,name}) => {
  let [showComments,setShowComments]=useState(false)
  let [postLiked,setPostLiked]=useState(liked)
  let [likes,setLikes]=useState(post.likes)

  const handleLike=async()=>{
    setPostLiked(true)
    setLikes(likes+1)

    try{
      const response=await fetch(`/api/like/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({post_id:post._id}) 
      })

      if(response.status===201){
        
        const res=await response.json()
        console.log("res",res)
      }
    }
    catch(err){
      console.log(err)
    }



  }

  const handleLiked=async()=>{
    setPostLiked(false)
    setLikes(likes-1)

    try{
      const response=await fetch(`/api/unlike/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({post_id:post._id}) 
      })

      if(response.status===201){
        
        const res=await response.json()
        console.log("res",res)
      }
    }
    catch(err){
      console.log(err)
    }

  }

  
  
  return (
    <div className='bg-gray-800 sm:px-4 py-4 px-1 my-4 flex flex-col m-2 flex-wrap rounded-md'>
      <div className='text-white flex justify-between mb-1'>
        <div className='flex flex-col ps-1 sm:ps-4 my-2'>
          <div className='text-white sm:text-2xl pb-0'><Link href={`/user/${post.user_id}`}>{post.user_name}</Link></div>
          <div className='text-white sm:text-sm text-vsm'>{post.date}</div>
        </div>
         <div className='p-4'><button className='text-white font-bold bg-blue-800 py-2 px-4 rounded-lg'>Follow</button></div> 
      </div>
      <div className='text-white px-1 sm:px-6 mb-1 bg-slate-900 py-4 rounded-lg w-[100%] break-words'>{post.content}</div>
      <div className='text-white sm:text-sm text-vsm mb-1 px-1 sm:px-6'>Likes: {likes}</div>
      <div className='flex justify-between'>
        {!postLiked && <button onClick={handleLike} className='text-white font-bold bg-blue-800 py-2 rounded-lg px-1 sm:px-6 mt-2'>Like</button>}
        {postLiked && <button onClick={handleLiked} className='text-white font-bold bg-purple-800 py-2 rounded-lg px-1 sm:px-6 mt-2'>Liked</button>}
        <button onClick={()=>setShowComments(!showComments)} className='text-white font-bold bg-blue-800 py-2 rounded-lg px-1 sm:px-6 mt-2'>Comment</button>

      </div>
      {showComments && <Comments  post_id={post._id} user_id={id} user_name={name} />}


    </div>
  )
}

export default Post