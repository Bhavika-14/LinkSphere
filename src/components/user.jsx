"use client"
import React , {useState,createContext,useContext} from "react"

const UserContext=createContext()

export function UserProvider({children}){
    const [user,setUser]=useState("")

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(){
    return useContext(UserContext)
}