const express = require('express');
const router = express.Router();

let AirCompanies = require('../db/schemas/AirCompany'),
    Flight = require('../db/schemas/Flight');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/aircompanies', (req, res) => {
  AirCompanies
    .find({})
    .then(function (result) {
      if (result) {
        res.contentType('application/json');
        res.send(JSON.stringify(result));
      }
      else res.send("AirCompanies not found");
    });
});

router.get('/flights', (req, res) => {
  var searchObj = {
    "departure" : req.query.departure, "destination": req.query.destination,
    "date_arrival": req.query.date, "direct": req.query.onlyDirect
  };
  var directFLights = [], notDirectFilghts = [];
  Flight.aggregate ([
    {
      $match: {
        "destination.city": searchObj.destination,
        "date_arrival": new Date(searchObj.date_arrival)
      }
    },
    {
      $graphLookup: {
        from: "flights",
        startWith: "$departure",
        connectFromField: "departure",
        connectToField: "destination",
        depthField: "numFlights",
        maxDepth : 0,
        as: "flightHierarchy"
      }
    }
  ])
    .then(function (results) {
      for(var i = 0; i < results.length; ) {
        for (var j = 0; j < results[i].flightHierarchy.length; j++) {
          if (Date.parse(results[i].flightHierarchy[j].time_arrival) > Date.parse(results[i].time_departure)
            || results[i].flightHierarchy[j].departure.city != searchObj.departure) {
            results[i].flightHierarchy.splice(j, 1);
            j--;
          }
        }
        if(!results[i].flightHierarchy.length && results[i].departure.city != searchObj.departure) {
          results.splice(i, 1);
          continue;
        }
        i++;
      }
      res.json(results);
    })
});

module.exports = router;
