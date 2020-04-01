const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//sessão
routes.post('/session', SessionController.create);//login

//ongs
routes.post('/ongs', OngController.create);//criar
routes.get('/ongs', OngController.index);//listar

//casos
routes.post('/incidents', IncidentsController.create);//criar
routes.get('/incidents', IncidentsController.index);//listar
routes.delete('/incidents/:id', IncidentsController.delete);//deletar

//profile
routes.get('/profile', ProfileController.index);//lista casos especificos de uma ong

module.exports = routes; 