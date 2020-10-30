const express = require('express')
const router = express.Router()
const Action = require('./actionModel.js')

router.get('/', (req, res)=> {
    Action.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.delete('/:id', (req, res)=> {
    Action.remove(req.params.id)
    .then(action => {
        res.status(200).json({message: 'action was deleted'})
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