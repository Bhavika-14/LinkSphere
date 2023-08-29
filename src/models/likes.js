const mongoose = require("mongoose")

const Schema=mongoose.Schema;

const likeSchema=new Schema({
    user_id:{type:String},
    posts_liked:{type:[String],default:[]}
}
)
export default mongoose.models.Likes || mongoose.model("Likes",likeSchema)