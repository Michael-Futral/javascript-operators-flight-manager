const { supportsEsModules } = require("mocha/lib/utils");

function Flights() {

    function calculateNumberOfFlights(Passengers, Capacity) {
        let flights = (Passengers / Capacity);
        return flights;
    }

}

module.exports = Flights();

