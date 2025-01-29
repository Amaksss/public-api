const express = require('express');
const apiRoute = express.Router();
const { getInfo } = require('../Controller/apiController')

apiRoute.get('/hng12', getInfo);

module.exports = apiRoute;