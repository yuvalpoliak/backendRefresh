const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = (url) => {
 return mongoose.connect(
    url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false},
    )
 }

 module.exports = connectToDB