const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bobaSchema = new Schema({
    name: {
        type: String,
        required: false
    }

})

// define our hacker model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Boba', bobaSchema)
