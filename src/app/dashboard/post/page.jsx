"use client"
import React, { useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

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
    <div>
        Add Your Post
        <form onSubmit={handleSubmit}>
            <div>
                {session.data.user.name}

            </div>
            <label htmlFor='content'>Enter Your content</label>
            <textarea type='text' id="content" onChange={(e)=>setText(e.target.value)} />
            <button type='submit'>Add</button>

        </form>
    </div>
  )
}

export default AddPost