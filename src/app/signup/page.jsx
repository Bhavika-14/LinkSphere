"use client"

import React,{ useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebase"
require('dotenv').config()

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
      const response=await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data) 
      })

      
      
      

      if(response.status===201){
        
        const res=await response.json()
        console.log("res",res)
        console.log("db",db)
        console.log("id",res.id)
        
        
        try{
        
        await setDoc(doc(db,"users",res.id), {
          name: res.name,
          email: res.email,
          id: res.id
          
        });
        console.log("completed")}
        catch(err){
          console.log(err)
        }

        router.push("/login")
        

        
      }

    }
    catch(err){
      setError(err);
      console.log(err)

    }
    }
  return (
    <div className=''>
        <div className='py-8'>
            <h1 className='flex justify-center shrink sm:text-6xl text-4xl  font-bold text-purple-700'>LinkSphere</h1>
        </div>
        <div className='flex justify-center items-center mt-10'>
            <form className='flex flex-col align-center content-center item-center justify-center bg-gray-900 py-8 sm:px-16 px-8 items-center rounded-xl'  onSubmit={handleSignup}>
              <div>
                {error && "Something Went Wrong"}
              </div>
              <div className='flex flex-col my-2'>
                <label htmlFor='name' className='py-2'>Name</label>
                <input type='text'className='p-2 rounded-md' id='text' required placeholder='Enter your Name here' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='flex flex-col my-2'>
                <label htmlFor='email' className='py-2'>Email</label>
                <input type='email' className='p-2 rounded-md' id='email' required placeholder='Enter your Email here' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='flex flex-col my-2'>
                <label htmlFor='password' className='py-2'>Password</label>
                <input type='password' className='p-2 rounded-md' id='password' required placeholder='Enter your Password here' onChange={(e)=>setPassword(e.target.value)} />
                
              </div>
              <div className=' bg-purple-700 rounded-2xl font-bold my-6 text-center' >
                <button type='submit' className='py-4 px-8 text-center'>Signup</button>
              </div>
              <div className=''>Already have an account! <span className='text-blue-500'> <Link href="/login">Login</Link></span></div></form>
        </div>
       
        
    </div>
  )
}

export default SignUp