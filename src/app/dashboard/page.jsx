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


const Dashboard = () => {

  const session = useSession()
  const router = useRouter()
  const [user,setUser]=useUserContext()

  const fetcher = (...args)=>fetch(...args).then((res)=>res.json())

  const { data,mutate,error,isLoading }=useSWR(
    `/api/post?id=${session?.data?.user.id}`,
    fetcher
  )

  console.log(session)

  data && data.map((post)=>console.log("post",post))
  if(session.status==="loading"){
    return(<><div>Loading</div></>)
  }

  if(session.status==="authenticated"){
    //setUser({name:session.data.user.name,email:session.data.user.email,id:session.data.user.id})
    console.log(user)
    return (
      <div>
        <Navbar name={session.data.user.name} id={session.data.user.id} />
        <UserDetails name={session.data.user.name} id={session.data.user.id} email={session.data.user.email} />
        

        
        <div className='flex bg-black justify-center my-4'>
          <div className='flex flex-col sm:w-6/12 w-11/12'>
            {data && data.map((post,key)=>{
              return(
                <Post post={post} key={key} />
              )
            })}
  
          </div>
        </div>
      </div>
  
    )
  }
}

export default Dashboard