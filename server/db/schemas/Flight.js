var mongoose = require('../mongooseConnection.js'),
    Schema = mongoose.Schema;

var flightSchema = Schema({
    number: {
        type: String,
        required: true,
        unique: true
    },
    date_departure: {
        type: Date,
        required: true
    },
    date_arrival: {
        type: Date,
        required: true
    },
    departure: {
        type: Schema.Types.Mixed,
        required: true
    },
    destination: {
        type: Schema.Types.Mixed,
        required: true
    },
    time_departure: {
        type: Date,
        required: true
    },
    time_arrival: {
        type: Date,
        required: true
    },
    plane_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    pricesVip: [],
    pricesNormal: []
});

flightSchema.statics.addFlight = function (number, date_departure, date_arrival, departure, destination, time_departure, time_arrival,
                                     plane_id, pricesVip, pricesNormal) {
    var newFlight = new this({
        "number": number,
        "date_departure" : date_departure,
        "date_arrival": date_arrival,
        "departure": departure,
        "destination": destination,
        "time_departure": time_departure,
        "time_arrival": time_arrival,
        "plane_id": plane_id,
        "pricesVip": pricesVip,
        "pricesNormal": pricesNormal
    });
    return newFlight.save(function (err) {
        if (err) return console.error(err);
    });
};

flightSchema.statics.random = function() {
    return this
        .count()
        .then(function(count) {
            var rand = Math.floor(Math.random() * count);
            return this.findOne().skip(rand);
        }.bind(this));
};

var Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;