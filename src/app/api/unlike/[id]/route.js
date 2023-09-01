import { NextResponse } from "next/server";
import connect from "@/utils/db"
import Likes from "@/models/likes"
import Post from "@/models/post"

export const PUT = async(request,{params})=>{
    const id = params.id
    console.log("id put",id)

    const req= await request.json()
    const post_id=req.post_id

    try{
        await connect()
        const likesbyuser=await Likes.findOneAndUpdate({user_id:id},{$pull:{posts_liked:post_id}}).exec()
        console.log("likesbyuser",likesbyuser)

        const post = await Post.findOneAndUpdate({user_id:id},{$inc:{'likes':-1}}).exec()
        console.log("user",post)
        
        
        return new NextResponse(JSON.stringify(likesbyuser),{status:200})
    }
    catch(err){
        console.log(err)
        return new NextResponse("Database Error",{status:500})
    }
}