var mongoose = require('../mongooseConnection.js'),
    Schema = mongoose.Schema;

var ticketSchema = Schema({
    flight_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    plane_place_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    value: {
        type: Schema.Types.Decimal,
        required: true
    }
});

var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;