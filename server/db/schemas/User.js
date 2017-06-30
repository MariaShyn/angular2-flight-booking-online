var mongoose = require('../mongooseConnection.js');

var userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    card_number: {
        type: String
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;