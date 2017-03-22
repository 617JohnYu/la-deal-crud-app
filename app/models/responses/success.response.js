const BaseResponse = require('./base.response')

class SuccessResponse extends BaseResponse {

    constructor() {
        super()
        this.isSuccessful = true
        this.alert.type = 'success'
        this.alert.message = 'YOUR REQUEST IS GUCCI'
    }

}

module.exports = SuccessResponse