var mongoose = require('../mongooseConnection.js');

var planeModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    places : {
        type: Number,
        required: true
    },
    rows: {
        type: Number,
        required: true
    },
    vip_places: {
        type: Number,
        required: true
    },
    vip_rows: {
        type: Number,
        require: true
    }
});

planeModelSchema.statics.addPlaneModel = function (name, places, rows, vip_places, vip_rows) {
    var newplaneModel = new this({
        "name" : name,
        "places": places,
        "rows": rows,
        "vip_places": vip_places,
        "vip_rows": vip_rows
    });
    return newplaneModel.save(function (err) {
        if (err) return console.error(err);
    });
};

planeModelSchema.statics.random = function() {
    return this
        .count()
        .then(function(count) {
            var rand = Math.floor(Math.random() * count);
            return this.findOne().skip(rand);
        }.bind(this));
};

var PlaneModel = mongoose.model('PlaneModel', planeModelSchema);

module.exports = PlaneModel;