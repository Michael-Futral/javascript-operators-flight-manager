// const { supportsEsModules } = require("mocha/lib/utils");

function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {

        let flights = passengers / capacity;
        return flights;
    };

    return { calculateNumberOfFlights }

};

module.exports = Flights();

