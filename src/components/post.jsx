"use client"
import React,{ useState } from 'react'
import Comments from './comments'

const Post = ({post}) => {
  let [showComments,setShowComments]=useState(false)
  const comments=[]
  return (
    <div className='bg-gray-800 sm:px-4 py-4 px-1 my-4 flex flex-col m-2 flex-wrap rounded-md'>
      <div className='text-white flex justify-between mb-1'>
        <div className='flex flex-col ps-1 sm:ps-4 my-2'>
          <div className='text-white sm:text-2xl pb-0'>{post.user_name}</div>
          <div className='text-white sm:text-sm text-vsm'>{post.date}</div>
        </div>
         <div className='p-4'><button className='text-white font-bold bg-blue-700 py-2 px-4 rounded-lg'>Follow</button></div> 
      </div>
      <div className='text-white px-1 sm:px-6 mb-1 bg-slate-900 py-4 rounded-lg'>{post.content}</div>
      <div className='text-white sm:text-sm text-vsm mb-1 px-1 sm:px-6'>Likes: {post.likes}</div>
      <div className='flex'>
        <button className='text-white font-bold bg-blue-700 py-2 rounded-lg px-1 sm:px-6 mt-2'>Like</button>
        <button onClick={()=>setShowComments(!showComments)} className='text-white font-bold bg-blue-700 py-2 rounded-lg px-1 sm:px-6 mt-2'>Comment</button>

      </div>
      {showComments && <Comments comments={comments} />}


    </div>
  )
}

export default Post