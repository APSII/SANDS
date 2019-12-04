require('dotenv/config')
const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT || 3333

server.use(cors())
server.use(express.json())

server.listen(port,()=>{
    console.log(`Servidor iniciando na porta ${port}`)
})