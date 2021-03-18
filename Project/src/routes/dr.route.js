const express=require('express')
const router =new express.Router()
const doctorModel=require('../models/doctor.model')
router.get('/all',async(req,res)=>{
    try {
        const doctors=await doctorModel.find({})
        res.status(200).send({
            apiStatus:true,
            data:doctors,
            message:'successful'

        })
    } catch (e) {
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:'failed'
        })
        
    }
})
router.post('/reg',async(req,res)=>{
    try {
        const doctor=new doctorModel(req.body)
        await doctor.save()
        res.status(200).send({
            apiStatus:true,
            data:doctor,
            message:'Doctor added successfully'
        }) 
    } catch (e) {
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:'failed'
        })     
    }
})
module.exports=router 