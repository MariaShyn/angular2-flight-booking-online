var Abbreviation = require('./schemas/Abbreviation.js'),
    Admin = require('./schemas/Admin.js'),
    AirCompany = require('./schemas/AirCompany.js'),
    Flight = require('./schemas/Flight.js'),
    Plane = require('./schemas/Plane.js'),
    PlaneModel = require('./schemas/PlaneModel.js'),
    PlanePlace = require('./schemas/PlanePlace.js'),
    Ticket = require('./schemas/Ticket.js'),
    User = require('./schemas/User.js');

var airports = require('airport-codes/airports.json'),
    faker = require('faker'),
    mongoose = require('mongoose'),
    moment = require('moment'),
    Q = require('q');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillAdmin() {
    return Admin
        .remove({})
        .exec()
        .then(function () {
            var admin = new Admin({
                "full_name": "Maria Shyn",
                "login": "1111",
                "password": "1111",
                "email": "11@11"
            });
            return admin.save();
        })
        .then(function () {
           console.log("Admin collection added successfully");
        })
        .catch(function(err){
            console.log('Admin fill error:', err);
        });
}

function fillAbreviations ()  {
    return Abbreviation
        .remove({})
        .exec()
        .then(function () {
            return Q.all(airports.map(function (port) {
                var abbr = new Abbreviation({
                    "city": port.city,
                    "country": port.country,
                    "name": port.name,
                    "abbr": port.iata || port.icao || "Not found",
                    "timezone": port.timezone
                });
                return abbr.save();
            }));
        })
        .then(function () {
            console.log("Abbreviations added successfully");
        })
        .catch(function(err){
            console.log('Abbreviation fill error:', err);
        });
}

function fillAirCompanies () {
    return AirCompany
        .remove({})
        .exec()
        .then( function () {
            return AirCompany.addCompany( "Ryanair",
                "Ryanair Ltd. (ISEQ: RYA, LSE: RYA, NASDAQ: RYAAY) is an Irish low-cost airline headquartered in Swords," +
                "Dublin, Ireland, with its primary operational bases at Dublin and London Stansted airports. In 2016, Ryanair" +
                "was the largest European airline by scheduled passengers flown, and carried more international passengers than"+
                " any other airline. Ryanair operates over 370 Boeing 737-800 aircraft, with a single 737-700 used primarily" +
                "as a charter aircraft, but also as a backup plane and for pilot training. The airline has been " +
                "characterised by its rapid expansion, a result of the deregulation of the aviation industry in Europe in " +
                "1997 and the success of its low-cost business model. Ryanair's route network serves 34 countries in Europe," +
                " Africa (Morocco), and the Middle East (Israel).",
                "Ryanair DAC, Dublin Office, Airside Business Park, Swords, Co. Dublin",
                "+353 1 945 12 12",
                [40.741895, -73.989308]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Air China",
                "Air China Limited (simplified Chinese: 中国国际航空公司; traditional Chinese: 中國國際航空公司;)" +
                " colloquially known as 国航/國航, SEHK: 0753, LSE: AIRC, SSE: 601111) is the flag carrier and one of the" +
                " major airlines of the People's Republic of China, with its headquarters in Shunyi District, Beijing. Air" +
                " China's flight operations are based at Beijing Capital International Airport. In 2015, the airline carried" +
                " 90 million domestic and international passengers with an average load factor of 80%.",
                "Jingxin Mansion,A-2,Dongsanhuan Bei Road,Beijing,100027,P.R.China",
                "+86-10-59281588",
                [39.939897, 116.442672]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Aegean Airlines",
                "Aegean Airlines S.A. is the largest Greek airline by total number of passengers carried, by number of" +
                " destinations served and by fleet size. A Star Alliance member since June 2010, it operates scheduled and " +
                "charter services from Athens and Thessaloniki to other major Greek destinations as well as to a number of" +
                " European and Middle Eastern destinations. Its main hubs are Athens International Airport in Athens, " +
                "Thessaloniki International Airport in Thessaloniki and Larnaca International Airport in Cyprus. It also " +
                "uses other Greek airports as bases, some of which are seasonal. It has its head office in Kifisia, a suburb" +
                " of Athens.[9] Although the airline is the largest airline in Greece, it is not a flag carrier.",
                "31 Viltanioti str., 145 64 Kifissia, Greece",
                "(+30) 210 6261000",
                [38.078653, 23.787946]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Luxair",
                "Luxair, legally Luxair S.A., Société Luxembourgeoise de Navigation Aérienne, is the flag carrier airline" +
                " of Luxembourg with its headquarters and homebase at Luxembourg Findel Airport in Sandweiler. It operates" +
                " scheduled services to destinations in Europe, North Africa, the Mediterranean and Middle East with " +
                "additional charter and seasonal services. It is Luxembourg's only passenger-carrying airline",
                "Aéroport de Luxembourg L-2987 Luxembourg ",
                "+352 2456-1",
                [49.6289, 6.214745]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Sky Airline",
                "Sky Airline is an airline based at Comodoro Arturo Merino Benítez International Airport in Santiago," +
                " Chile. It is the second largest airline in the country behind rival LATAM Airlines. It serves international" +
                " routes to Argentina, Brazil, Perú and Bolivia. It operates under a semi-low cost model. Compared to other" +
                " European or US low cost carriers, it has a smaller business model, lower wages for its employees, and " +
                "lucrative regulatory requirements[citation needed] . It also operates charter flights in Chile and South America.",
                "Casa Matriz, Santa Elena 1761, Santiago, Chile",
                "+56 2 353 3100",
                [33.466955, -70.628199]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Lufthansa",
                "Deutsche Lufthansa AG (FWB: LHA), commonly known as Lufthansa (sometimes also as Lufthansa German Airlines)," +
                " is the largest German airline and, when combined with its subsidiaries, also the largest airline in Europe," +
                " in terms of fleet size, and the second largest airline in terms of passengers carried during 2016. It" +
                " operates services to 18 domestic destinations and 197 international destinations in 78 countries across" +
                " Africa, the Americas, Asia, and Europe, using a fleet of more than 270 aircraft. Lufthansa is one of the" +
                " five founding members of Star Alliance, the world's largest airline alliance, formed in 1997. The name of" +
                " the company is derived from Luft 'air' and Hansa, the Hanseatic League",
                "Munich International Airport (MUC), Nordallee 25, 85356 München, Germany",
                "+49 69 86 799 799",
                [48.353662, 11.775028]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "Scandinavian Airlines",
                "Scandinavian Airlines, often shortened to SAS (previously Scandinavian Airlines System and legally " +
                "Scandinavian Airlines System Denmark-Norway-Sweden) is the flag carrier of Sweden, Norway and Denmark, and" +
                " the second largest airline in Scandinavia in terms of passengers (after fellow rival Norwegian). Part of" +
                " the SAS Group and headquartered at the SAS Frösundavik Office Building in Solna, Sweden, the airline" +
                " operates 182 aircraft to 90 destinations. The airline's main hub is at Copenhagen-Kastrup Airport, with " +
                "connections to over 50 cities in Europe. Stockholm-Arlanda Airport (with more than 30 European connections) " +
                "and Oslo Airport, Gardermoen are the other major hubs. Minor hubs also exist at Bergen Airport, " +
                "Flesland, Göteborg Landvetter Airport, Stavanger Airport, Sola and Trondheim Airport, Værnes. SAS Cargo is " +
                "an independent, wholly owned subsidiary of Scandinavian Airlines and its main office is at Copenhagen Airport.",
                "Frösundaviks Allé 1 195 87 Stockholm",
                "+7 (495) 7829353",
                [59.371763, 18.023768]
            )
        })
        .then( function (err) {
            return AirCompany.addCompany( "United Airlines",
                "United Airlines, Inc., commonly referred to as United, is an American airline headquartered in Chicago," +
                " Illinois. It is the world's third-largest airline when measured by revenue. United operates a large domestic " +
                "and international route network, with an extensive presence in the Asia-Pacific region. United is a founding" +
                " member of Star Alliance, the world's largest airline alliance. Regional service is operated by independent" +
                " carriers under the brand name United Express. Its main competitors are American Airlines, Delta Air Lines," +
                " and Southwest Airlines.",
                "Elefthérios Venizélos International Airport (ATH)",
                "+7 (495) 7829353",
                [ 37.935647, 23.948416]
            )
        })
        .then(function () {
            console.log("AirCompanies added successfully");
        })
        .catch(function (err) {
            console.log("AirCompany fill error: " + err);
        })
}

function fillPlaneModels () {
    return PlaneModel
        .remove({})
        .exec()
        .then(function() {
            return PlaneModel.addPlaneModel(
                "Airbus A300", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Airbus A310", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Airbus A380", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Embraer ERJ-140", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Boeing-787", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Boeing-737", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "MRJ", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Saab", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Boeing-767", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Antonov An-38", 48, 8, 8, 2
            );
        })
        .then(function () {
            return PlaneModel.addPlaneModel(
                "Antonov An-140", 48, 8, 8, 2
            );
        })
        .then(function () {
            console.log("PlaneModels added successfully");
        })
        .catch(function (err) {
            console.log("PlaneModels fill error:" + err);
        })
}

function fillPlanes () {
    return Plane
        .remove({})
        .exec()
        .then(function () {
            var randomPlaneModel, randomAirCompany;
            var result = [];
            for(var i = 0; i < 25; i++) (function(i){
                result.push(
                    PlaneModel
                        .random()
                        .then(function (result) {
                            randomPlaneModel = result;
                            return AirCompany.random();
                        })
                        .then(function (result2) {
                            randomAirCompany = result2
                            return Plane.addPlane(Math.random().toString(36).substring(2, 5), randomPlaneModel._id, randomAirCompany._id);
                        })
                );
            })(i);
            return Q.all(result);
        })
        .then(function () {
            console.log("Plane collection added successfully");
        })
        .catch(function(err){
            console.log('Plane fill error:', err);
        });


}

function fillUsers () {
    return User
        .remove({})
        .exec()
        .then(function () {
            var results = [];
            for( var i = 0; i < 25; i++) (function(i){
                var user = new User({
                    "first_name": faker.name.firstName(),
                    "last_name": faker.name.lastName(),
                    "card_number": faker.finance.account(),
                    "email": faker.internet.email()
                });
                results.push (
                    user.save()
                );
            })(i);
            return Q.all(results);
        })
        .then(function () {
            console.log("Users collection added successfully");
        })
        .catch(function(err){
            console.log('Users fill error:', err);
        });
}

function fillPlanePlace () {
    var letterString = "ABCDEFGH";
    return PlanePlace
        .remove({})
        .exec()
        .then(function() {
            return Plane.find({})
        })
        .then(function(planes) {
            return Q.all(planes.map(function (plane) {
                return PlaneModel
                    .find({"_id": plane.model_id})
                    .exec()
                    .then(function (model) {
                        var result = [];
                        for(var i = 0; i < model[0].vip_rows; i++) (function (i) {
                            for(var j = 0; j < model[0].vip_places / model[0].vip_rows; j++) (function(j) {
                                var newPlanePlace = new PlanePlace({
                                    "number":  i,
                                    "letter": letterString[j],
                                    "class": true,
                                    "plane_id": plane._id
                                });
                                result.push(
                                    newPlanePlace.save()
                                );
                            })(j);
                        })(i);
                        return Q.all(result);
                    });
            }))
        })
        .then(function () {
        console.log("PlanePlace collection added successfully");
    })
        .catch(function(err){
            console.log('PlanePlace fill error:', err);
        });



}

function fillFlights () {
    var promises = [];
    var EuropeCapitals = [ "Yerevan", "Vienna",	"Baku", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb", "Nicosia",
        "Prague", "Copenhagen", "Tallinn", "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Budapest", "Reykjavik",
        "Dublin", "Rome", "Riga", "Vilnius", "Valletta", "Chisinau", "Monaco", "Podgorica",
        "Amsterdam", "Warsaw", "Lisbon", "Bucharest", "Moscow", "Belgrade", "Bratislava", "Ljubljana", "Madrid",
        "Stockholm", "Bern", "Ankara", "Kiev", "London"];
    for(var i = 0; i < 300; i++) (function(i){
        var departure = {};
        var mapPoints = {};
        var random = getRandomInt(0, EuropeCapitals.length);
        var city = EuropeCapitals[random];
        var promise = Abbreviation
            .find({"city": city})
            .then(function (result) {
                if(!result || !result.length) console.log(city);
                if(result instanceof Array) result = result[0];
                mapPoints.departure = result;
            })
            .then(function () {
                var city = EuropeCapitals[getRandomInt(0, EuropeCapitals.length)];
                if(!mapPoints.departure) console.log(city);
                while(city == mapPoints.departure.city) {
                    city = EuropeCapitals[getRandomInt(0, EuropeCapitals.length)];
                }
                return Abbreviation.findOne({"city": city});
            })
            .then(function (result) {
                if(result instanceof Array) result = result[0];
                mapPoints.destination = result;
            })
            .then(function () {
                var dateDepatureRand = getRandomArbitrary(0, 8);
                var dateDeparture = new Date();
                //dateDeparture.setDate(dateDeparture.getDate() + dateDepatureRand);
                dateDeparture.setHours(getRandomArbitrary(0, 24));
                dateDeparture.setMinutes(getRandomArbitrary(0, 60));
                dateDeparture.setSeconds(0, 0);

                var dateArrival = new Date(dateDeparture);
                dateArrival.setDate(dateArrival.getDate() + getRandomInt(0, 2));
                dateArrival.setSeconds(0, 0);
                if(dateArrival.getDate() - dateDeparture.getDate() == 0) {
                    var hoursToEndDay = 24 - dateDeparture.getHours();
                    dateArrival.setHours(dateDeparture.getHours() + (hoursToEndDay - 1));
                } else {
                    dateArrival.setHours(getRandomInt(0, 24));
                }

                mapPoints.time_departure = new Date(dateDeparture.getTime() - (dateDeparture.getTimezoneOffset() * 60000));
                dateDeparture.setHours(0, 0, 0, 0);
                mapPoints.date_departure = new Date(dateDeparture.getTime() - (dateDeparture.getTimezoneOffset() * 60000));

                mapPoints.time_arrival = new Date(dateArrival.getTime() - (dateArrival.getTimezoneOffset() * 60000));
                dateArrival.setHours(0, 0, 0, 0);
                mapPoints.date_arrival = new Date(dateArrival.getTime() - (dateArrival.getTimezoneOffset() * 60000));
                return Plane.find({});
            })
            .then(function (planeList) {
                mapPoints.plane = planeList[getRandomInt(0, planeList.length)];
                mapPoints.number = faker.random.number();
            })
            .then(function () {
                mapPoints.pricesVip = [];
                mapPoints.pricesNormal = [];
                var vip1, vip2, vip3;
                var normal1, normal2, normal3;
                vip1 = getRandomInt(150, 300);
                normal1 = getRandomInt(20, 150);
                mapPoints.pricesVip.push(vip1, vip1 + 50, vip1 + 100);
                mapPoints.pricesNormal.push(normal1, normal1 + 50, normal1 + 100);
            })
            .then(function () {
                return Flight.addFlight(mapPoints.number, mapPoints.date_departure, mapPoints.date_arrival, mapPoints.departure,
                    mapPoints.destination, mapPoints.time_departure, mapPoints.time_arrival, mapPoints.plane._id,
                    mapPoints.pricesVip, mapPoints.pricesNormal);
            });
        promises.push(promise);
    })(i);
    return Flight
        .remove({})
        .exec()
        .then(function () {
            return Q.all(promises);
        })
        .then(function () {
            console.log("Flight collection added successfully");
        })
        .catch(function(err){
            console.log('Flight fill error:', err);
        });
}

function fillDB() {
    fillAdmin()
        // .then(function () {
        //     return fillAbreviations();
        // })
        // .then(function () {
        //      return fillAirCompanies();
        // })
        // .then(function () {
        //     return fillPlaneModels();
        // })
        // .then(function () {
        //     return fillPlanes();
        // })
        // .then(function () {
        //     return fillPlanePlace();
        // })
        // .then(function () {
        //     return fillUsers();
        // })
        .then(function () {
            return fillFlights();
        })
        .finally(function () {
            mongoose.connection.close();
        });
}


fillDB();