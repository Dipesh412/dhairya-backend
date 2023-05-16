const express = require('express');
const { createStats } = require('../controllers/statsController');

const statsRouter = express.Router();

statsRouter.post('/create', createStats);

module.exports = statsRouter;
