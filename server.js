const express = require(
    'express'
)
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080

app.use((req, res) => {
    res.send('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
})

app.listen(port, () => {
    console.log('RAID BOSS IS RUNNING ON port: ' + port)
})