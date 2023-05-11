const mongoose = require('mongoose');
const couponScehma = mongoose.Schema(
    {
        images: {
            type: String,
            required: true,
        },
        heading: {
            type: String,
            required: true,
            lowerCase: true
        },
        points: {
            type: Number,
            required: true
        },
        status: {
            type: Number,
            default: 0
        }
    }
)

module.exports = mongoose.model('Coupon', couponScehma);