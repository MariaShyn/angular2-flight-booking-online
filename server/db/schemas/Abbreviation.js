var mongoose = require('../mongooseConnection.js');

var abbreviationSchema = mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    timezone: {
        type: String
    }
});

var Abbreviation = mongoose.model('Abbreviation', abbreviationSchema);

module.exports = Abbreviation;