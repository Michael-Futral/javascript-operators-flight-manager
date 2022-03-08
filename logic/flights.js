function Flights() {

    function calculateNumberOfFlights(Passengers, Capacity) {
        let flights = (Passengers / Capacity);
        return flights;
    }

    console.log(calculateNumberOfFlights(1000, 100));
}

