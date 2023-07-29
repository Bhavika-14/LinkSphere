import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from "@/models/user"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"

const handler=NextAuth({
    providers:[
        CredentialsProvider({
            id:"credentials",
            name:"Credentials",
            async authorize(credentials){
                await connect();
                try{
                    const user= await User.findOne({
                        email:credentials.email
                    })
                    console.log(credentials)
                    console.log(user)

                    if(user){
                        const isPasswordCorrect=await bcrypt.compare(
                            credentials.password,
                            user.password
                        )

                        if(isPasswordCorrect){
                            console.log("new")
                            
                            
                            return user
                        }
                        else{
                            throw new Error("Wrong Credentials")
                        }


                    }
                    else{
                        console.log("not found")
                        throw new Error("User not found")
                    }
                }
                catch(err){
                    console.log(err)
                    throw new Error(err)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token }) {
          return token
        },
        async session({session,token}){
            session.user.id=token.sub
            return session
        }
      },
    
    pages:{
        error:"/login"
    }
})

export {handler as GET,handler as POST}