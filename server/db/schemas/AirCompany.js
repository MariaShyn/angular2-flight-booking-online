var mongoose = require('../mongooseConnection.js');

var airCompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    phone: {
        type: String
    },
    coords: []
});



airCompanySchema.statics.addCompany = function (name, description, location, phone, coords) {
    var newAirCompany = new this({
        "name" : name,
        "description": description,
        "location": location,
        "phone": phone,
        "coords": coords
    });
    return newAirCompany.save(function (err) {
        if (err) return console.error(err);
    });
};

airCompanySchema.statics.random = function() {
    return this
        .count()
        .then(function(count) {
            var rand = Math.floor(Math.random() * count);
            return this.findOne().skip(rand);
        }.bind(this));
};



var AirCompany = mongoose.model('AirCompany', airCompanySchema);


module.exports = AirCompany;