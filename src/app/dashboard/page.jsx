"use client"
import React from 'react'
import useSWR from "swr"
import { useSession,signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from 'next/link'


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
        {session.data.user.name} {session.data.user.email}

        <Link href="/dashboard/post"><button>Add Post</button></Link>
        <button onClick={
          signOut
          
        }>Logout</button>
      </div>
  
    )
  }
}

export default Dashboard