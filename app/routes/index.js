const router = require('express').Router()
// const bobasRoutes = require('./bobas.routes')
const bobasRoutes = require('./bobas.routes')


// router.use('/api/bobas', bobasRoutes)
router.use('/api/bobas', bobasRoutes)


module.exports = router