const { json } = require('express')
const express = require('express')
const router = express.Router()
const Action = require('./actionModel.js')

router.get('/', (req, res)=> {
    Action.get()
    .then(actions => {
        if (actions) {
            res.status(200).json(actions)
        } else {
            res.status(404).json({message: 'no actions available'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.delete('/:id', (req, res)=> {
    Action.remove(req.params.id)
    .then(action => {
        if (action){
            res.status(200).json({message: 'action was deleted'})
        } else {
            res.status(404).json({message: 'no action found with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.post('/:id', (req, res)=> {
    const newAction = {...req.body, project_id: req.params.id }
    Action.insert(newAction)
    .then(action => {
        if (action){
            res.status(201).json(action)
        } else {
            res.status(400).json({message: 'missing data'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})

router.put('/:id', (req, res)=> {
    Action.update(req.params.id, req.body)
    .then(action => {
        if (action){
            res.status(200).json(action)
        } else {
            res.status(404).json({message: 'cannot find that action'})
        }
    })
    .catch(err => {
        res.status(500).json({message: err.message })
    })
})


module.exports = router