const express = require('express')
const app = express() // we require express every time we use dot notation with 'app'
const bodyParser = require('body-parser') // Parses the req.body ({extend : true }) parses shit for you into nice JSON format
const methodOverride = require('method-override') // Gives you access to delete/put functions
const mongoose = require('mongoose') // framework to talk to Mongodb
const path = require('path') // helps serve static files
const port = process.env.PORT || 8081

require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017') // Our mongoose is connected to our default mongodb server.
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

app.use(bodyParser.json()) // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.static(path.join(__dirname, 'public'))) // Passing in (path.join + __dirname(public) into express)

// app.use((req, res) => {
//     res.send('GGGGGGGGGGGGGGGGGGGGGGGGGGG YES')
// })
// app.use(function(req, res, next){
//     console.log('Time: ' + Date.now())
// })

app.use(require('./app/routes'))
app.use(function (req, res) {
    res.sendFile(`public/index.html`, {
        root: path.join(__dirname, './')
    })
})
app.listen(port, () => {
    console.log('RAID BOSS IS RUNNING ON port: ' + port)
})