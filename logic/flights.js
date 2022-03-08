// const { supportsEsModules } = require("mocha/lib/utils");

function Flights() {

    function calculateNumberOfFlights(passengers, capacity) {
        let flights = Passengers / Capacity;
        console.log(flights);
        return flights;
    };

    return { calculateNumberOfFlights }

};

module.exports = Flights();

