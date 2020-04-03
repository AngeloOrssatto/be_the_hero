const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rota / Recurso -> "Caminho" utilizado para acesso
 */

 /**
  * METODOS HTTP:
  * 
  * get: Buscar uma informação do back-end
  * post: Criar um informação no back-end
  * put: Alterar uma informação no back-end
  * delete: Deletar uma informação no back-end
  */

  /**
   * TIPOS DE PARAMETRO:
   * 
   * Query: parametros nomeados enviados na rota apos o simbolo ? -> Filtros, paginação 
   * Route: parametros utilizados para identificar recursos (/:parametro)
   * Request Body: corpo da requisição utilizado para criar ou alterar recursos
   * 
   */

   /**
    * SQLite: BD ja incluso no projeto
    * 
    */



