"use client"
import React from 'react'
import useSWR from "swr"
import { useSession,signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Post from '@/components/post'
import { useUserContext } from '@/components/user'
import UserDetails from "@/components/user_details"
import Posts from "@/components/posts"

 

const Dashboard =() => {

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args)=>fetch(...args).then((res)=>res.json())
  console.log(session?.data?.user.id)
  const { data,mutate,error,isLoading }=useSWR(
    `/api/post?id=${session?.data?.user.id}`,
    fetcher
  )
  
  //const liked=await fetch(`http://localhost:3000/api/post?id=${session?.data?.user.id}`)
  //console.log(await liked.json())
//

  console.log(session)

  data && data.map((post)=>console.log("post",post))


  
  if(session.status==="loading"){
    return(<><div>Loading</div></>)
  }

  

  if(session.status==="authenticated"){
    //setUser({name:session.data.user.name,email:session.data.user.email,id:session.data.user.id})
    //console.log(user)
    return (
      <div>
        <Navbar name={session.data.user.name} id={session.data.user.id} />
        <UserDetails name={session.data.user.name} id={session.data.user.id} email={session.data.user.email} />
        

        
        <Posts data={data} id={session.data.user.id} name={session.data.user.name} />
      </div>
  
    )
  }
  
}

export default Dashboard