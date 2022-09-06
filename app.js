const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const env = require('dotenv')
const connectToDB = require('./connectDB');
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler');

env.config();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

connectToDB(process.env.MONGO).then(() => 
console.log('mongo is connected'))
.catch((error) => console.log(error));


app.listen(port, console.log('listening to port ', port));
