const express = require('express')
const router = express.Router()
const Project = require('./projectModel.js')

router.get('/', (req, res)=> {
    Project.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.delete('/:id', (req, res)=> {
    Project.remove(req.params.id)
    .then(project => {
        res.status(200).json({message: 'project was deleted'})
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.post('/', (req, res)=> {
    Project.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.put('/:id', (req, res)=> {
    Project.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.get('/:id', (req, res)=> {
    Project.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})


module.exports = router