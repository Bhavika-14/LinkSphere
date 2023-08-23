import { NextResponse } from "next/server"
import User from "@/models/user"
import connect from "@/utils/db"

export const GET=async(request,{ params })=>{
    
    const id=params.id
    try{
        await connect()
        const res=await User.findById(id)
        const user={
            name:res.name,
            id:res._id,
            email:res.email
        }
       
        return  new NextResponse(JSON.stringify(user),{ status:200 })
    }
    catch(err){
        console.log("error")
        console.log(err)
        return new NextResponse("error")
    }

}