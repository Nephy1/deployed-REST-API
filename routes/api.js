const express = require('express')
const images = require('./data/gallery')
const app = express()

app.get('/api/photos', function(request, response) {
  response.send(images)
})

app.get('/api/photos/:id', function(request, response){
  const photo = images.find(function(photo){
    return request.params.id === photo.id
  })
  response.send(photo)
})



