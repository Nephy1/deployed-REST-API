"use strict";
// Declaring lets for error prevention

let output = "";
let alt = "";
// images

const images  = [
  {
    id:            '1',
    title:         'Night Life In Asia',
    description:   'Photo of a district at night somewhere in Asia',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/asia-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/anonymous-people-walking-on-city-street-near-building-at-night-6635766/',
    credit:        'Wencheng Jiang',
    creditUrl:     'https://www.pexels.com/@wenchengphoto'
  },
  {
    id:            '2',
    title:         'Birds Eye View',
    description:   'Photo of traffic at night from a rooftop',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/bird-view-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/aerial-photography-of-city-buildings-during-nighttime-2446930/',
    credit:        'Anna Lowe',
    creditUrl:     'https://www.pexels.com/@anna-lowe-895508'
  },
  {
    id:            '3',
    title:         'Close For Comfort',
    description:   'Cars parking in a tight alleyway at night',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/cars-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/car-parked-near-the-building-2272825/',
    credit:        'Vitor Gusmao Shimabukuro',
    creditUrl:     'https://www.pexels.com/@vitor-gusmao-shimabukuro-1110669'
  },
  {
    id:            '4',
    title:         'Dark',
    description:   'Dark alleyway with chairs and tables',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/dark-lit-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/dark-alley-with-turned-on-street-lamps-2376799/',
    credit:        'Nicolas Postiglioni',
    creditUrl:     'https://www.pexels.com/@postiglioni'
  },
  {
    id:            '5',
    title:         'Dim and Damp',
    description:   'People in a market district at night',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/dim-lit-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/people-standing-between-buildings-during-nighttime-3075535/',
    credit:        'Connor Danylenko',
    creditUrl:     'https://www.pexels.com/@connor-danylenko-534256'
  },
  {
    id:            '6',
    title:         'Empty',
    description:   'Ground level photo of an empty street downtown',
    width:         '300',
    height:        '390',
    pathUrl:       'images/array-images/downtown-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/white-concrete-buildin-3396883/',
    credit:        'Josh Hild',
    creditUrl:     'https://www.pexels.com/@josh-hild-1270765'
  },
  {
    id:            '7',
    title:         'Look Up',
    description:   'An insanely tall building in Dubai',
    width:         '300',
    height:        '400',
    pathUrl:       'images/array-images/highrise-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/people-standing-near-high-rise-building-during-night-time-1707310/',
    credit:        'Zaib Azhar',
    creditUrl:     'https://www.pexels.com/@zaib'
  },
  {
    id:            '8',
    title:         'Shift Work',
    description:   'An ambulance parked on the side of the road in the winter',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/medic-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/person-standing-beside-car-1853537/',
    credit:        'Artem Saranin',
    creditUrl:     'https://www.pexels.com/@arts'
  },
  {
    id:            '9',
    title:         'Blurred Reflection',
    description:   'Photo of downtown at night with its reflection blurred in some water',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/reflection-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/city-buildings-during-night-time-3643104/',
    credit:        'Efrain Alonso',
    creditUrl:     'https://www.pexels.com/@efrain-alonso-1702385'
  },
  {
    id:            '10',
    title:         'Busy Busses',
    description:   'Timelapse photo of someone at a bus stop',
    width:         '267',
    height:        '400',
    pathUrl:       'images/array-images/timelapse-night-life.jpeg',
    linkUrl:       'https://www.pexels.com/photo/person-standing-by-the-bus-stop-1829183/',
    credit:        'Brayden Law',
    creditUrl:     'https://www.pexels.com/@braydenlaw'
  }
  
 ];
// Locally Hosted images -  forEach loop
 
images.forEach(function(image){
  output += `<section><a href="${image.linkUrl}"> 
  <img src="${image.pathUrl}"
  alt = "${image.description}"></a>
  <figcaption>
  <p>${image.id}: ${image.title}, by ${image.credit}</p>
  </figcaption>
  <a href="${image.linkUrl}">Original</a>
  </section>`
});

 const gallery = document.querySelector('.gallery');
 gallery.innerHTML = output;