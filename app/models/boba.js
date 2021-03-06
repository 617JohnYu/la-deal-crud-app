const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bobaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }

})

// define our hacker model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Boba', bobaSchema)