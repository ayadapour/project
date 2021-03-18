const mongoose=require('mongoose')
const articleSchema= new mongoose.Schema({
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