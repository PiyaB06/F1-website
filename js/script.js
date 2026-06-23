const races = [

    {
        round: 8,
        name: "Austrian Grand Prix",
        location: "Spielberg • Red Bull Ring",
        date: "2026-06-26T13:00:00"
    },

    {
        round: 9,
        name: "British Grand Prix",
        location: "Silverstone",
        date: "2026-07-03T13:00:00"
    },

    {
        round: 10,
        name: "Belgian Grand Prix",
        location: "Spa-Francorchamps",
        date: "2026-07-17T13:00:00"
    },

    {
        round: 11,
        name: "Hungarian Grand Prix",
        location: "Budapest",
        date: "2026-07-24T13:00:00"
    },

    {
        round: 12,
        name: "Dutch Grand Prix",
        location: "Zandvoort",
        date: "2026-08-21T13:00:00"
    },

    {
        round: 13,
        name: "Italian Grand Prix",
        location: "Monza",
        date: "2026-09-04T13:00:00"
    },

    {
        round: 14,
        name: "Spanish Grand Prix",
        location: "Madrid",
        date: "2026-09-11T13:00:00"
    },

    {
        round: 15,
        name: "Azerbaijan Grand Prix",
        location: "Baku",
        date: "2026-09-24T13:00:00"
    },

    {
        round: 16,
        name: "Singapore Grand Prix",
        location: "Singapore",
        date: "2026-10-09T13:00:00"
    },

    {
        round: 17,
        name: "United States Grand Prix",
        location: "Austin",
        date: "2026-10-23T13:00:00"
    },

    {
        round: 18,
        name: "Mexico City Grand Prix",
        location: "Mexico City",
        date: "2026-10-30T13:00:00"
    },

    {
        round: 19,
        name: "São Paulo Grand Prix",
        location: "Brazil",
        date: "2026-11-06T13:00:00"
    },

    {
        round: 20,
        name: "Las Vegas Grand Prix",
        location: "Las Vegas",
        date: "2026-11-19T13:00:00"
    },

    {
        round: 21,
        name: "Qatar Grand Prix",
        location: "Lusail",
        date: "2026-11-27T13:00:00"
    },

    {
        round: 22,
        name: "Abu Dhabi Grand Prix",
        location: "Yas Marina",
        date: "2026-12-04T13:00:00"
    }
];

const now = new Date();

const nextRace = races.find(race =>
    new Date(race.date) > now
);

if(nextRace){

    document.getElementById("race-name").textContent =
        `Round ${nextRace.round} • ${nextRace.name}`;

    document.getElementById("race-location").textContent =
        nextRace.location;

    const raceDate = new Date(nextRace.date).getTime();

    function updateCountdown(){

        const currentTime = new Date().getTime();

        const distance = raceDate - currentTime;

        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);
}
else{

    document.getElementById("race-name").textContent =
        "Season Complete";

    document.getElementById("race-location").textContent =
        "See you next year!";
}

