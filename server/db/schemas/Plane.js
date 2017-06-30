var mongoose = require('../mongooseConnection.js');

var planeSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    model_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    air_company_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

planeSchema.statics.addPlane = function (code, model_id, air_company_id) {
    var newPlaneSchema = new this({
        "code" : code,
        "model_id": model_id,
        "air_company_id": air_company_id
    });

    return newPlaneSchema.save(function (err) {
        if (err) return console.error(err);
    });
};

var Plane = mongoose.model('Plane', planeSchema);

module.exports = Plane;