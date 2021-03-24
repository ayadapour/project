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

router.delete('/article/:id',  async(req,res)=>{
    try{
        id = req.params.id
        const article = await articleModel.findByIdAndDelete(id)
        if(!article) throw new Error('invalid article id')
        res.send("deleted")
    }
    catch(error){
        res.status(500).send({
            apiStatus: false,
            data: error.message,
            message:'user register error'
        })
    }

})
router.patch('/articles/:id',async(req, res)=>{
    const allowedUpdates = ['title','doctorName','content']
    const userUpdates = Object.keys(req.body)
    const isValid = userUpdates.every(update=>allowedUpdates.includes(update))
    if(!isValid) res.status(500).send('invalid updates')
    try{
        const article = await articleModel.findByIdAndUpdate(req.params.id, req.body,
            {new:true, runValidators:true})
        if(!article) return res.send('Article not found')
        res.send('updated')
    }
    catch(err){
        res.status(500).send(err.message)
    }
})














module.exports=router