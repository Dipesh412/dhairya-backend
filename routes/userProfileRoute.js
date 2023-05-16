const express = require('express');
const { createUserProfile } = require('../controllers/profileController');

const userProfileRouter = express.Router();

userProfileRouter.post('/create', createUserProfile);

module.exports = userProfileRouter;
