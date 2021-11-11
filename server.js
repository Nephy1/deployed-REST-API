// Modules
const express = require('express')
const images = require('./data/gallery')
const app = express()
const mongoose = require('mongoose')
const model = require ('./data/models/photos')
const dotenv = require('dotenv').config()
let PORT = process.env.PORT
app.use(express.static('public'))


mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  })

app.get('/api/photos', function(request, response) {
   response.send(images)
 })

app.get('/api/photos/:id', function(request, response){
  const photo = images.find(function(photo){
    return request.params.id === photo.id
  })
    response.send(photo)
})

app.use(function(request, response) {
  if (request.url.startsWith('/api')) {
    response.status(404)
    response.send({"Error": "404 Not Found"})
  } else {
    response.status(404)
    response.redirect('/404.html')
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log(`Listening on ${PORT}`)
})



