const router = require('express').Router()
const bobasController = require('../controllers/bobas.controller')()
module.exports = router

router.get('/', bobasController.getAll)


