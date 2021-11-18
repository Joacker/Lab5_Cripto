/* IMPORTS */

const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/pdf-app'

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));