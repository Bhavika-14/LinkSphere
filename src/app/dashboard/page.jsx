"use client"
import React from 'react'
import useSWR from "swr"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


const Dashboard = () => {

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args)=>fetch(...args).then((res)=>res.json())

  console.log(session)

  if(session.status==="loading"){
    return(<><div>Loading</div></>)
  }

  if(session.status==="authenticated"){
    return (
      <div>{session.data.user.name} {session.data.user.email}</div>
    )
  }
}

export default Dashboard