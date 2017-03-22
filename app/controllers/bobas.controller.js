const responses = require('../models/responses')
const path = require('path')
const apiPrefix = '/api/bobas'
const bobaModel = require('../models/boba')
const bobasService = require('../services/bobas.services')({
    modelService: bobaModel // passing in this model object is allowed b/c we pass in 'options' to our serivce
})

module.exports = bobasController

function bobasController() {
    return {
        getAll,
        insert,
        updateOneById,
        getOneById,
        deleteOneById

    }

    function getAll(req, res) {
        bobasService.getAll()
            .then((bobas) => {
                const responseModel = new responses.ItemsResponse()
                responseModel.items = bobas
                res.json(responseModel)
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function insert(req, res) {
        bobasService.insert(req.body)
         .then((bobas) => {
                const responseModel = new responses.ItemsResponse()
                responseModel.items = bobas
                // res.status(201).location(path.join(apiPrefix, hacker._id.toString())).json(responseModel)
                res.json(responseModel)
                console.log(responseModel)
                console.log('^^responseModel^^^^')
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function updateOneById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        bobasService.updateOneById(queryCondition, req.body)
            .then((bobas) => {
                const responseModel = new responses.ItemsResponse()
                res.json(responseModel).status(204)
                console.log(responseModel)

            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function getOneById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        bobasService.getOneById(queryCondition)
            .then((bobas) => {
                const responseModel = new responses.ItemsResponse()
                responseModel.items = bobas
                res.json(responseModel)
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function deleteOneById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        bobasService.deleteOneById(queryCondition)
            .then((bobas) => {
                const responseModel = new responses.ItemsResponse()
                responseModel.items = bobas
                res.json(responseModel)
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }
}