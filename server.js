const express = require('express');
const photographers = require('./data/photographers.js');
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors());
app.use(express.json());

app.locals.title = 'Shutterbugs API';
app.locals.photographers = photographers;

app.set('port', 8080);
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on ${app.get('port')}!`);
});

// Test
app.get('/', (request, response) => {
  response.status(200).json({
    smoke: 'test',
  });
});

// GET all photographers
app.get('/api/v1/photographers', (request, response) => {
  response.status(200).json(app.locals.photographers);
});

// GET specific photographer
app.get('api/v1/photographers/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const foundPhotographer = app.locals.photographers.find((photographer) => photographer.id === id);

  if (!foundPhotographer) {
    return response.status(404).json({ message: `Sorry, no photographer found with an id of ${id}` });
  }
  
  response.status(200).json(foundPhotographer);
});

// POST new photographer
app.post('/api/v1/photographers', (request, response) => {
  const submittedPhotographer = request.body;
  
  for (let requiredParameter of ['name', 'birth_year', 'birth_death', 'country_of_origin', 'based', 'group_affiliations', 'bio', 'photos']) {
    if (!submittedPhotographer[requiredParameter]) {
    return response.status(422).json({ message: `Body is missing required parameter of ${requiredParameter}.`})
    }
  }

  //making sure that I am creating these fields on the server side
  //user will add user notes once inside the details page
  //same for favorite. favorite functionality only accessible on main and details page
  submittedPhotographer.user_notes = "";
  submittedPhotographer.is_favorite = false;
  submittedPhotographer.id = Date.now();
  app.locals.photographers.push(submittedPhotographer);

  response.status(201).json(submittedPhotographer);
});

// DELETE specific photographer
app.delete('api/v1/photographers/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const filteredPhotographers = app.locals.photographers.filter(photographer => photographer.id != id);
  app.locals.photographers = filteredPhotographers;

  response.status(200).json(app.locals.photographers);
})
