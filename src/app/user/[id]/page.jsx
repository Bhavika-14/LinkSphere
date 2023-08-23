import React from 'react'
import UserProfile from "@/components/userprofile"

async function getData(id){
 
  const res=await fetch(`http://localhost:3000/api/user/${id}`,{cache:"no-store"})
  if(res.status===200){
    const user=await res.json()
    let name=user.name
    let email=user.email
    let id=user.id
    return { name,email,id}
  }
  
    
  

}

const User = async({params}) => {
  
  console.log(params)
  
  const { name,email,id}=await getData(params.id)
  
  
  

 

  return(
    <div>
    
    <UserProfile id={id} name={name} email={email} />
    </div>
    
  )
    

}

export default User