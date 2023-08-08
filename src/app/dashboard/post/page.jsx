"use client"
import React, { useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Navbar from '@/components/navbar'

const AddPost = () => {
  const session = useSession()
  const router= useRouter()
  const [text,setText]=useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(text)
    var data={
      content:text,
      user_id:session.data.user.id,
      likes:0,
      user_name:session.data.user.name,
      date:Date.now()
    }
    console.log(data)
    try{
      const res=await fetch("/api/post",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data) 
      })
      

      if(res.status===201){
        router.push("/dashboard")
      }

    }
    catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className='flex flex-col'>
       <Navbar name={session.data.user.name} />
       <div className='text-center sm:text-4xl text-2xl text-purple-700 font-bold mt-2 sm:mt-6'>
          Add Your Post
        </div>
        <div className='flex  bg-black justify-center'>
          <div className='flex justify-center sm:w-6/12 md:px-1 sm:px-8 px-1  w-9/12 bg-gray-900 rounded-lg my-2 sm:my-8'>
            
            <form onSubmit={handleSubmit} className='flex flex-col my-10 py-4 sm:ms-1 ms-2'>
                  
                  <div className='my-2'><label htmlFor='content' className='my-2'>Enter Your content</label></div>
                  <div ><textarea type='text' rows={10}  cols={40} placeholder='Enter your text here'  id="content" className='sm:w-full w-11/12 md:h-full h-3/4 cursor-text sm:my-2 my-1 rounded-md p-2' onChange={(e)=>setText(e.target.value)} /></div>
                  <div><button className="bg-blue-800 rounded-lg py-2 px-4 sm:my-8 my-1" type='submit'>Add</button></div>

      
            </form>
          
          </div>
          
            
      
        </div>
        
        </div>
  )
}

export default AddPost