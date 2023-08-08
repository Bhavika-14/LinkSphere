import React from  "react"
import Link from "next/link"
import { signOut } from "next-auth/react"

export default function Navbar({name,id}){
    return(
        <div className="bg-gray-800 flex flex-wrap justify-between">
            <div className="text-purple-700 sm:px-10 py-10 px-4 text-4xl font-bold"><Link href={"/"}>Linksphere</Link></div>
            <div className="text-white sm:p-10 p-2 pt-10 text-2xl font-bold"><Link href={`/user/${id}`}>Hi,{name}</Link></div>
            <div className="flex mx-2">
              <div className="py-10 sm:pe-10 pe-4"><Link href="/dashboard/post"><button className="bg-purple-700 rounded-lg text-center font-bold text-white py-2 px-4">Add Post</button></Link></div>
              <div className="py-10 sm:pe-10 pe-4"><button className="bg-purple-700 text-center rounded-lg font-bold text-white py-2 px-4" onClick={signOut}>Logout</button></div>
            </div>

        </div>
    )
}