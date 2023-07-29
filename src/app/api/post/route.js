import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Post from "@/models/post"

export const GET = async(request)=>{
    const url = new URL(request.url)
    const id = url.searchParams.get("id")

    try{
        await connect();
        const posts= await Post.find()
        return new NextResponse(JSON.stringify(posts),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
    
}

export const POST = async(request)=>{
    const req=await request.json()
    const newPost= new Post(req)

    try{
        await connect()
        await newPost.save()
        console.log(newPost)

        return new NextResponse("Post has been created",{status:201})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }

}