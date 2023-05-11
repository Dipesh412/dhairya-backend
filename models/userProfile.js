const mongoose = require('mongoose');
const couponSchema = require('./coupons');

const profSchema = mongoose.Schema(
    {
        city: {
            type: String,
            required: true, 
            lowerCase: true
        },
        state: {
            type: String,
            required: true,
            lowerCase: true
        },
        pinCode: {
            type: int,
            required: true,
        },
        country: {
            type: String,
            required: true,
            lowerCase: true
        },
        collections: [
            {
                type: String,
                required: true
            }
        ],
        coupons: [
            couponSchema
        ]
    }
)

module.exports = mongoose.model('Profile', profSchema);