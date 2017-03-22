module.exports = bobasService

function bobasService(options) {
    let Boba

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    Boba = options.modelService

    return {
        getAll,
        insert,
        getOneById,
        updateOneById,
        deleteOneById
    }

    function getAll() {
        return Boba.find()
    }

    function insert(document) {
        let boba = new Boba(document)
        return boba.save()
    }

    function getOneById(queryCondition) {
        return Boba.findOne(queryCondition)
    }

    function updateOneById(queryCondition, doc) {
        return Boba.findOneAndUpdate(queryCondition, doc, {
            new: true
        })
    }

    function deleteOneById(queryCondition) {
        return Boba.findOneAndRemove(queryCondition)
    }
}