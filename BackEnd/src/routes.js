const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate'); 
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//sessão
routes.post('/session', SessionController.create);//login

//ongs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);//criar
routes.get('/ongs', OngController.index);//listar

//casos
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
    }).unknown(),
}), IncidentsController.create);//criar

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentsController.index);//listar
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);//deletar

//profile
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        Authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);//lista casos especificos de uma ong

module.exports = routes; 