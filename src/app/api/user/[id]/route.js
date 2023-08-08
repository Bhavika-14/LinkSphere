import { NextResponse } from "next/server"
import User from "@/models/user"
import connect from "@/utils/db"

export const GET=async(request,{ params })=>{
    const { id } =params.id;
    console.log("id")
    console.log(id)
    try{
       
        return  new NextResponse("successful",{ status:200 })
    }
    catch(err){
        console.log("error")
        console.log(err)
        return new NextResponse("error")
    }

}