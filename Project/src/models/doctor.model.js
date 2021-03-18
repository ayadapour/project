const mongoose=require('mongoose')
const validator=require('validator')
// const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    userId:{type:Number},
    name:{type:String, required:true, trim:true},
    // accountStatus:{type:Boolean, default:false},
    phone:{
        type:String,
        trim:true,
        //match:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    },
    // country:{
    //     type:String,
    //     required:true,
    //     trim:true,
    //     enum:['egypt', 'palstine', 'canda', 'iraq']
    // },
    password:{
        type:String,
        required:true,
        trim:true
    },
    // birthdate:{
    //     type:Date
    // },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('invalid email')
        }
    },
  
    // addresses:[{
    //     address: {
    //         addrType:{type:String}, 
    //         addrDetails:{type:String}
    //     }
    // }],
    tokens:[
        {token:{type:String, required:true}}
    ],
    // userProfile:{
    //     type:String
    // }
},{
    timestamps:true
}
)
userSchema.pre('save',async function(next) {
    x=await User.findOne({}).sort({_id:-1})
    if(!x) userid=1
    else userid=x.userid+1 
    let d=this
    this.userid=this.userid 
})
const User=mongoose.model('User',userSchema) 
module.exports=User