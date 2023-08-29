import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Likes from "@/models/likes"
import User from "@/models/user"

export const GET = async(request,{params})=>{
    const id = params.id
    console.log("id",id)

    try{
        await connect()
        const likes=await Likes.findOne({user_id:id}).exec()
        console.log("likes",likes)
        const posts_liked=likes.posts_liked
        console.log(posts_liked)
        return new NextResponse(JSON.stringify(posts_liked),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
}

export const PUT = async(request,{params})=>{
    const id = params.id
    console.log("id",id)

    const req= await request.json()
    const post_id=req.post_id

    try{
        await connect()
        const likes=await Likes.findOneAndUpdate({user_id:id},{$push:{posts_liked:post_id}}).exec()
        console.log("likes",likes)

        const user = await User.findByIdAndUpdate(id,{likes:likes+1}).exec()
        
        
        return new NextResponse(JSON.stringify(likes),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
}