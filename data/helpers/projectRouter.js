const express = require('express')
const router = express.Router()
const Project = require('./projectModel.js')

router.get('/', (req, res)=> {
    console.log('pRouter working')
})

module.exports = router