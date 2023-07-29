"use client"

import React,{ useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)

  const router=useRouter()
  
  const handleSignup=async(e)=>{
    e.preventDefault();
    var data={
      name:name,email:email,password:password
    }
    try{
      const res=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data) 
      })
      

      if(res.status===201){
        router.push("/login")
      }

    }
    catch(err){
      setError(err);
      console.log(err)

    }
    }
  return (
    <div className='container m-5'>
        <div>
            <h1>LinkSphere</h1>
        </div>
        <div>
            <form onSubmit={handleSignup}>
              <div>
                {error && "Something Went Wrong"}
              </div>
              <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='text' required placeholder='Enter your Name here' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' required placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' required placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)} />
                <button type='submit'>SignUp</button>
              </div>
            </form>
        </div>
        <div>Already have an account! <span> <Link href="/login">Login</Link></span></div>
    </div>
  )
}

export default SignUp