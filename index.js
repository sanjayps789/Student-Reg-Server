require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

const regServer = express()
regServer.use(cors())
regServer.use(express.json())
regServer.use(router)
const PORT = 8000 || process.env.PORT
regServer.listen(PORT,()=>{
    console.log(`regServer started at port: ${PORT}`);
})

regServer.get('/',(req,res)=>{
    res.send("<h1 style=color:red>Reg Server Started... and waiting for client request<h1/>")
})

