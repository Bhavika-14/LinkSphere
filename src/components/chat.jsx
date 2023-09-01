"use client"
import React,{ useState,useEffect } from 'react'
import Messages from "@/components/messages"
import Input from "@/components/input"
import { getDoc,setDoc,doc } from 'firebase/firestore'
import { db } from '@/app/firebase'
import { user_data } from '@/components/user_details'

const Chat = ({u_id,receiverID,chatID,name,u_name}) => {

  
  useEffect(()=>{

    const getChat=async()=>{
      try{
        const chatID=chatID
        const res=await getDoc(doc(db,"chats",chatID))

        if(!res.exists()){

          await setDoc(doc(db,"chats",chatID),{messages:[]})
          console.log("completed")

        }
      }
      catch(err){
        console.log("error",err)
      }

    }

    return async()=>{
      await getChat()
    }

  }
     

  ,[])
  
  
  

 
  console.log(user_data)
  return (
    <div className='flex bg-black justify-center my-2'>
      <div className='flex flex-col sm:w-6/12 w-11/12 py-4 sm:px-6 px-4 bg-gray-900'>
        <Messages chatID={chatID} u_id={u_id} name={name} u_name={u_name} />
        <Input chatID={chatID} sender={u_id} />
      </div>
    </div>
  )
}

export default Chat