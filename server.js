const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const projectRouter = require('./data/helpers/projectRouter.js')
const actionRouter = require('./data/helpers/actionRouter.js')

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)


server.get('/', (req, res) => {
    res.send('endpoint is working!')
})

module.exports = server