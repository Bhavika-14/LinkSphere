"use client"
import React, { useState } from 'react'
import Chat from './chat'

const Profile = ({u_id,name,id,email,u_name,chatID}) => {

  const [showChat,setShowChat]=useState(false)
  
  return (
    <div>
        {!showChat && u_id==id && 
          <div className="flex bg-black justify-center my-12 sm:my-32 rounded-lg p-2">
            <div className='flex flex-col sm:w-6/12 w-11/12 p-4 bg-gray-900'>
              <div>{name}</div>
              <div>Contact Info</div>
              <div>Email ID: {email}</div>
            </div>
          </div>}

        {!showChat && u_id!=id && 
          <div className="flex bg-black justify-center my-12 sm:my-32 rounded-lg p-2">
            <div className='flex flex-col sm:w-6/12 w-11/12 p-4 bg-gray-900'>
              <div className='mb-1 font-bold text-xl flex-wrap'>{name}</div>
              
              <div className='text-lg font-semibold'>Email ID:  {email}</div>
              <button className='py-2 px-1 rounded-lg bg-purple-700 text-white my-2' onClick={()=>{setShowChat(true)}}>
                Chat
              </button>
            </div>
          </div>}
        
  
        {showChat && <Chat u_id={u_id} receiverID={id} chatID={chatID} name={name} u_name={u_name} />}
  
    </div>
  )
}

export default Profile