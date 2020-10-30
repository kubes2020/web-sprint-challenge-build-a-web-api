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

router.post('/:id', (req, res)=> {
    const newAction = {...req.body, project_id: req.params.id }
    Action.insert(newAction)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.put('/:id', (req, res)=> {
    Action.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})


module.exports = router