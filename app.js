const express = require("express")
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const post = require('./routes/post')
const another = require('./routes/another')

//initialise
const app = express();
dotenv.config();

//middleware
app.use(express.json())
app.use('/post', post)
app.use('/another', another)

app.get('/', (req, res) => {
    res.send('hello')
    console.log('sdhsdh')
})

try{
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('db connected');
} catch (err) {console.error(err)}


try {
    app.listen(3000, () => console.log('server running'))
} catch(err) {console.error(err)}
