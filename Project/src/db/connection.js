const mongoose = require('mongoose')
try{
    mongoose.connect('mongodb://127.0.0.1:27017/doctorsApi', {
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
}
catch(e){
    console.log(e)
}