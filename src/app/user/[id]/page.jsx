import React from 'react'

async function getData(id){
  const res= await fetch(`http:localhost:3000/api/user/${id}`)
  //console.log(res)

}

const User = async({params}) => {
  const res=await getData(params.id)
  
  return (
    <div>{params.id}{res}</div>

  )
}

export default User