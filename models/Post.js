const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Post', PostSchema)