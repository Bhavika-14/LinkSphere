import User from "@/models/user"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
    
    const req=await request.json()
    const name=req.name
    const email=req.email
    const password=req.password

    await connect()
    const hashedPassword=await bcrypt.hash(password,10)
    

    const newUser= new User({
        name:name ,email:email ,password:hashedPassword
    })
    console.log(name,email,password,newUser)

    try{
        await newUser.save()
        return new NextResponse("User has been created",{ status:201 })


    }
    catch(err){
        return new NextResponse(err.message,{status:500})
    }
}