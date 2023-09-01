import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Comment from "@/models/comment"

export const GET = async(request)=>{
    const url = new URL(request.url)
    const id = url.searchParams.get("id")
    console.log("post_id",id)

    try{
        await connect();
        const comments= await Comment.find({post_id:id})
        console.log("comments",comments)
        return new NextResponse(JSON.stringify(comments),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
    
}

export const POST = async(request)=>{
    const req=await request.json()
    console.log(req)
    const newComment= new Comment(req)

    try{
        await connect()
        await newComment.save()
        console.log(newComment)

        return new NextResponse(JSON.stringify(newComment),{status:201})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }

}