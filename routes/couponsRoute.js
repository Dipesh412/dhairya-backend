const express = require('express');
const { createCoupon } = require('../controllers/couponController');

const couponRouter = express.Router();

couponRouter.post('/create', createCoupon);

module.exports = couponRouter;
