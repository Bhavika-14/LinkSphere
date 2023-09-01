const mongoose = require("mongoose")

const Schema=mongoose.Schema;

const commentSchema=new Schema({

    content:{type:String},
    user_id:{type:String},
    post_id:{type:String},
    user_name:{type:String},
    date:{type:Date}

}
)
export default mongoose.models.Comment || mongoose.model("Comment",commentSchema)