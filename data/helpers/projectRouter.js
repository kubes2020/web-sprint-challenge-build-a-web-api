const express = require('express')
const router = express.Router()
const Project = require('./projectModel.js')

router.get('/', (req, res)=> {
    Project.get()
    .then(projects => {
        if (projects){
            res.status(200).json(projects)
        } else {
            res.status(404).json({message: 'cannot find those projects'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.delete('/:id', (req, res)=> {
    Project.remove(req.params.id)
    .then(project => {
        if (project){
            res.status(200).json({message: 'project was deleted'})
        } else {
            res.status(404).json({message: 'cannot find that project'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.post('/', (req, res)=> {
    Project.insert(req.body)
    .then(project => {
        if (project){
            res.status(201).json(project)
        } else {
            res.status(400).json({message: 'name and description are required'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.put('/:id', (req, res)=> {
    Project.update(req.params.id, req.body)
    .then(project => {
        if (project){
            res.status(200).json(project)
        } else {
            res.status(404).json({message: 'cannot find that project'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.get('/:id', (req, res)=> {
    Project.getProjectActions(req.params.id)
    .then(actions => {
        if (actions){
            res.status(200).json(actions)
        } else {
            res.status(404).json({message: 'cannot find actions'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})


module.exports = router