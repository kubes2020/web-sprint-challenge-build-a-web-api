const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('endpoint is working!')
})

module.exports = server