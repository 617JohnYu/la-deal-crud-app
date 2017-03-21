module.exports = bobasService

function bobasService(options) {
    let Boba

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    Boba = options.modelService

    return {
        getAll
    }

    function getAll() {
        return Boba.find()
    }
}