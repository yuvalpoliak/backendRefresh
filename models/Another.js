const mongoose = require('mongoose')

const anotherSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Another', anotherSchema)