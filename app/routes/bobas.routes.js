const router = require('express').Router()
const bobasController = require('../controllers/bobas.controller')()
module.exports = router

router.get('/', bobasController.getAll)
router.post('/', bobasController.insert)
router.get('/:id', bobasController.getOneById)
router.put('/', bobasController.updateById)
router.delete('/', bobasController.deleteById)