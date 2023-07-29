const mongoose = require("mongoose")

const Schema=mongoose.Schema;

const postSchema=new Schema({

    content:{type:String},
    user_id:{type:String},
    likes:{type:Number},
    user_name:{type:String},
    date:{type:Date}

}
)
export default mongoose.models.Post || mongoose.model("Post",postSchema)