const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const passport = require('passport')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=>{
    console.log("DB CONNECTED")
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)


const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));