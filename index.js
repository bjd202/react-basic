const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');

//mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/react-basic', { useNewUrlParser: true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false })
.then(() => {
    console.log('mongoDB connected successful');
})
.catch((err) => {
    console.error(err);
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))