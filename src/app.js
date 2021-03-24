const express=require('express')
const app =express()
require('./db/connection')
const cors=require ('cors')
const doctorRoutes=require('./routes/dr.route')
const articleRoutes=require('./routes/article.route')
// const articleModel=require('./models/article.model')
// const doctorModel=require('./models/doctor.model')
app.use(cors())
app.use(express.json())
app.use(doctorRoutes)
app.use(articleRoutes)

module.exports=app
