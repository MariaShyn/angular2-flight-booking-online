var mongoose = require('../mongooseConnection.js');

var adminSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;