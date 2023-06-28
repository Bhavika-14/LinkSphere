"use client"
import React,{ useState } from 'react'

import Link from 'next/link'
import { getProviders, signIn, useSession } from "next-auth"
import { useRouter } from 'next/router'

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const session=useSession()
  const router=useRouter()
  if(session.status==="loading"){
    return(<p>Loading</p>)
  }

  if(session.status==="authenticated"){
    router?.push("/dashboard")
  }


  const handleLogin=(e)=>{
    e.preventDefault();
    signIn("credentials",{email,password})

  }
  return (
    <div className='container m-5'>
        <div>
            <h1>LinkSphere</h1>
        </div>
        <div>
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' required placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' required placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>Login</button>
              </div>
            </form>
        </div>
        <div>Don't have an account! <span> <Link href="/register">SignUp</Link></span></div>
    </div>
  )
}

export default Login