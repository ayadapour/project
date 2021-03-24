const mongoose=require('mongoose')
const articleSchema=  mongoose.Schema({
    // id:{type:Number},
    title:{type:String,trim:true,required:true},
    doctorName:{type:String,trim:true,required:true},
    content:{type:String,trim:true,required:true},
    image:{type:String,default:null},
    video:{type:String,default:null}
},
{
    timestamps:true
})
const Article=mongoose.model('Article',articleSchema)
module.exports=Article