"use client"
import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import { doc,updateDoc,Timestamp,arrayUnion } from "firebase/firestore"
import {db} from "@/app/firebase"

const Input = ({chatID,sender}) => {
  const [message,setMessage]=useState(null)

  async function handleSend(e){
    e.preventDefault()
    console.log(message)

    try{
      await updateDoc(doc(db,"chats",chatID),{
        messages:arrayUnion(
          {
            id:uuid(),
            text:message,
            senderID:sender,
            date:Timestamp.now()
          }
        )
      })

      setMessage("")
    }
    catch(err){
      console.log("error",err)
    }


}
  return (
    <div className='mt-4'>
        <form className='flex flex-wrap justify-center gap-2' onSubmit={handleSend}>
            <input type='text' className='my-2 py-2 px-4 rounded-md sm:w-[75%] w-[85%]' placeholder='Enter your message here' onChange={(e)=>{setMessage(e.target.value)}} value={message} />
            <button type='submit' className='bg-purple-700 text-center rounded-lg font-bold text-white py-1 px-4'>Submit</button>
        </form>
    </div>
  )
}

export default Input