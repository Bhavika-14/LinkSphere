import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Likes from "@/models/likes"
import Post from "@/models/post"

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
    console.log("id put",id)

    const req= await request.json()
    const post_id=req.post_id

    try{
        await connect()
        const likesbyuser=await Likes.findOneAndUpdate({user_id:id},{$push:{posts_liked:post_id}}).exec()
        console.log("likesbyuser",likesbyuser)

        const post = await Post.findOneAndUpdate({user_id:id},{$inc:{'likes':1}}).exec()
        console.log("user",post)
        
        
        return new NextResponse(JSON.stringify(likesbyuser),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
}