var mongoose = require('mongoose'),
    db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/flight-booking');
mongoose.Promise = require('q').Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successfully connected");
});

module.exports = mongoose;