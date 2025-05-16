//46:50

const express= require("express")
const router= express.Router()
const User= require("../models/userModel")

//create
router.post("/", async(req,res)=>{
    try {
    const {name, email, age}= req.body
    const userAdded= await User.create({
        name: name,
        age: age,
        email: email
    })

    res.status(201).json(userAdded)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
    
})

router.get("/",async(req,res)=>{
    try {
        const showAll= await User.find()
        res.status(200).json(showAll)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const singleUser= await User.findById(req.params.id)
        res.status(200).json(singleUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const deleteId= await User.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteId)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        const updateId= await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).send(updateId)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

module.exports= router