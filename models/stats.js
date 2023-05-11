const mongoose = require('mongoose');
const statsSchema = mongoose.Schema(
    {
        days: {
            type: Number,
            required: true,
            default: 0
        },
        money: {
            type: double,
            required: true,
            default: 0
        },
        progress: double,
        required: true,
        default: 0
    }
)

module.exports = mongoose.model('stats', statsSchema);