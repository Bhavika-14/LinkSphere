"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import Profile from './profile'
import Navbar from '@/components/navbar'

const UserProfile = ({id,name,email}) => {
  const session=useSession()
  const u_id=session.data.user.id
  const u_name=session.data.user.name
  let chatID;
  if(u_id>id){
    chatID=u_id+id;
  }
  else{
    chatID=id+u_id
  }
  return (
    <div>
        <Navbar name={name} id={id} />
        <Profile name={name} u_id={u_id} id={id} email={email} u_name={u_name} chatID={chatID} />
    </div>
  )
}

export default UserProfile