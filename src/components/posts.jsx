"use client"
import React,{ useState,useEffect } from 'react'
import Post from './post'

const Posts = ({data,id,name}) => {
  
  const [liked,setLiked]=useState([])
  
  
  useEffect(()=>{
    const getlikes=async()=>{
        console.log("start")
        const res=await fetch(`http://localhost:3000/api/like/${id}`,{cache:"no-store"})
      
        const response=await res.json()
        setLiked(response)
        
       
        

    }

    return async()=>{
        await getlikes()
        
        
    }
  },[id])

 

  

  console.log(liked)

  return (
    <div className='flex bg-black justify-center my-4'>
          <div className='flex flex-col sm:w-6/12 w-11/12'>
            {data && data.reverse().map((post)=>{
                
                const user_liked=liked.includes(post._id)
                console.log(user_liked)
              return(
                <Post key={post._id} post={post} liked={user_liked} id={id} name={name} />
              )
            })}
  
          </div>
        </div>
  )
}

export default Posts