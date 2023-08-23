"use client"
import React, { useState } from "react"

let user_data
function UserDetails({id,name,email}){
    user_data={
        id:id,
        name:name,
        email:email
    }

    console.log(user_data)


}


export default UserDetails
console.log(user_data)
export {user_data}

