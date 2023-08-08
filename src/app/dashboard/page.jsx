"use client"
import React from 'react'
import useSWR from "swr"
import { useSession,signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Post from '@/components/post'


const Dashboard = () => {

  const session = useSession()
  const router = useRouter()

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
    return (
      <div>
        <Navbar name={session.data.user.name} id={session.data.user.id} />
        

        
        <div className='flex bg-black justify-center my-4'>
          <div className='flex flex-col sm:w-6/12 w-11/12'>
            {data && data.map((post)=>{
              return(
                <Post post={post} />
              )
            })}
  
          </div>
        </div>
      </div>
  
    )
  }
}

export default Dashboard