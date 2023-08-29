import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Post from "@/models/post"
import Likes from "@/models/likes"

export const GET = async(request)=>{
    const url = new URL(request.url)
    const id = url.searchParams.get("id")

    try{
        await connect();
        const postsres= await Post.find()
        

        const likes=await Likes.findOne({user_id:id}).exec()
            console.log("likes",likes)
            const posts_liked=likes.posts_liked
        let posts=[]
        postsres.map((post,key)=>{
            
            const liked=posts_liked.includes(post._id)
            post={...post._doc,liked}
            posts.push(post)
            

        })
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