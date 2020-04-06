const express = require('express')

const routes = express.Router();

const filesController = require('../src/controllers/filesController');

routes.get("/files", filesController.index);

routes.post("/files", filesController.create);

routes.put("/files/:id", filesController.update);

routes.delete("/files/:id", filesController.delete);

module.exports = routes;