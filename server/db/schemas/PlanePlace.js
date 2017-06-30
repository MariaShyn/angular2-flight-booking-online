var mongoose = require('../mongooseConnection.js');

var planePlaceSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    plane_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    letter: {
        type: String,
        required: true
    },
    class: {
        type: Boolean,
        default: false
    }
});

var PlanePlace = mongoose.model('PlanePlace', planePlaceSchema);

module.exports = PlanePlace;