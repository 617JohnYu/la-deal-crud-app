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
        getAll
    }

    // function getAll(req, res) {
    //     bobasService.getAll()
    //         .then(function (bobas) {
    //             res.json(bobas)
    //         })
    //         .catch((err) => {
    //             res.status(500).send(err)
    //         })
    // }

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
}