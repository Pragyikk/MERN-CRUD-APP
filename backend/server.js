const express= require("express")
const app= express()
const mongoose= require("mongoose")
const dotenv= require("dotenv")
dotenv.config()
const cors= require("cors")

app.use(cors())

const router= require("./routes/userRoute.js")
const User = require('./models/userModel.js')

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Successfully connected to the DB...")
    app.listen(process.env.PORT||8000,(err)=>{
        if(err) console.log(err)
        console.log("Running successfully at PORT", process.env.PORT)
    })
})
.catch((error)=>{
    console.log("error", error)
})

app.use('/',router)

//  app.get('/api/v1',router)
//  app.post('/api/v2',router)



