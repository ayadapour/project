const express=require('express')
const router =new express.Router()
const articleModel=require('../models/article.model')
//show article
router.get('/showallarticles',async(req,res)=>{
    try {
        const articles=await articleModel.find({})
        res.status(200).send({
            apiStatus:true,
            data:articles,
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
router.post('/addarticles',async(req,res)=>{
    try {
        const article=new articleModel(req.body)
        await article.save()
        res.status(200).send({
            apiStatus:true,
            data:article,
            message:'Article added successfully'

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