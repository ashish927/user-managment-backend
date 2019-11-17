const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./route/user.route')
const db = require('./config/database.properties') 
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect(db.mongodb.url, {useNewUrlParser: true});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', (req, res) => res.send('App is working'))
 
app.use('/api', routes)
 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
 

module.exports = {
  app
}