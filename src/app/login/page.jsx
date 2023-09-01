"use client"
import React,{ useEffect, useState } from 'react'

import Link from 'next/link'
import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const session=useSession("")
  

  useEffect(()=>{
    const router=useRouter()
    {session.status==="authenticated" &&
    router?.push("/dashboard")}
  },[session.status,router])
  
  console.log(session.status)
  if(session.status==="loading"){
    return(<p>{Loading}</p>)
  }

  


  const handleLogin=(e)=>{
    e.preventDefault();
    signIn("credentials",{email,password})

  }
  if(session.status==="unauthenticated"){
  return (
    <div className=''>
        <div className='py-8'>
            <h1 className='flex justify-center shrink sm:text-6xl text-4xl  font-bold text-purple-700'>LinkSphere</h1>
        </div>
        <div className='flex justify-center items-center mt-10'>
            <form className='flex flex-col align-center content-center item-center justify-center bg-gray-900 py-8 sm:px-16 px-8 items-center rounded-xl'  onSubmit={handleLogin}>
              
              
              <div className='flex flex-col my-2'>
                <label htmlFor='email' className='py-2'>Email</label>
                <input type='email' className='p-2 rounded-md' id='email' required placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='flex flex-col my-2'>
                <label htmlFor='password' className='py-2'>Password</label>
                <input type='password' className='p-2 rounded-md' id='password' required placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)} />
                
              </div>
              
              <div className=' bg-purple-700 rounded-2xl font-bold my-4 text-center' >
                <button type='submit' className='py-4 px-8 text-center'>Login</button>
              </div>
              <div>Don't have an account! <span className='text-blue-500'> <Link href="/signup">Signup</Link></span></div>
            </form>
        </div>
       
        
    </div>
  )
}
}

export default Login