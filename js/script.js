const races = [

    {
        round:8,
        name:"Austrian Grand Prix",
        circuit:"Red Bull Ring • Spielberg",
        race:"2026-06-28T13:00:00Z"
    },

    {
        round:9,
        name:"British Grand Prix",
        circuit:"Silverstone Circuit",
        race:"2026-07-05T14:00:00Z"
    },

    {
        round:10,
        name:"Belgian Grand Prix",
        circuit:"Spa-Francorchamps",
        race:"2026-07-19T13:00:00Z"
    },

    {
        round:11,
        name:"Hungarian Grand Prix",
        circuit:"Hungaroring • Budapest",
        race:"2026-07-26T13:00:00Z"
    },

    {
        round:12,
        name:"Dutch Grand Prix",
        circuit:"Zandvoort",
        race:"2026-08-23T13:00:00Z"
    },

    {
        round:13,
        name:"Italian Grand Prix",
        circuit:"Monza",
        race:"2026-09-06T13:00:00Z"
    },

    {
        round:14,
        name:"Spanish Grand Prix",
        circuit:"Madrid",
        race:"2026-09-13T13:00:00Z"
    },

    {
        round:15,
        name:"Azerbaijan Grand Prix",
        circuit:"Baku City Circuit",
        race:"2026-09-26T13:00:00Z"
    },

    {
        round:16,
        name:"Singapore Grand Prix",
        circuit:"Marina Bay",
        race:"2026-10-11T12:00:00Z"
    },

    {
        round:17,
        name:"United States Grand Prix",
        circuit:"Circuit of the Americas",
        race:"2026-10-25T19:00:00Z"
    },

    {
        round:18,
        name:"Mexico City Grand Prix",
        circuit:"Autódromo Hermanos Rodríguez",
        race:"2026-11-01T20:00:00Z"
    },

    {
        round:19,
        name:"São Paulo Grand Prix",
        circuit:"Interlagos",
        race:"2026-11-08T17:00:00Z"
    },

    {
        round:20,
        name:"Las Vegas Grand Prix",
        circuit:"Las Vegas Street Circuit",
        race:"2026-11-22T04:00:00Z"
    },

    {
        round:21,
        name:"Qatar Grand Prix",
        circuit:"Lusail International Circuit",
        race:"2026-11-29T16:00:00Z"
    },

    {
        round:22,
        name:"Abu Dhabi Grand Prix",
        circuit:"Yas Marina Circuit",
        race:"2026-12-06T13:00:00Z"
    }

];

function getNextRace(){

    const now = new Date();

    return races.find(race => new Date(race.race) > now);

}

const nextRace = getNextRace();

if(nextRace){

    const raceDate = new Date(nextRace.race);

    document.getElementById("race-name").textContent =
        `Round ${nextRace.round} • ${nextRace.name}`;

    document.getElementById("race-location").textContent =
        `📍 ${nextRace.circuit}`;

    document.getElementById("race-date").textContent =
        `📅 ${raceDate.toLocaleDateString(undefined,{
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        })}`;

    document.getElementById("race-time").textContent =
        `🕒 ${raceDate.toLocaleTimeString(undefined,{
            hour:"numeric",
            minute:"2-digit"
        })} (Your Local Time)`;

    function updateCountdown(){

        const now = new Date().getTime();

        const distance = raceDate.getTime() - now;

        document.getElementById("days").textContent =
            Math.floor(distance/(1000*60*60*24));

        document.getElementById("hours").textContent =
            Math.floor((distance%(1000*60*60*24))/(1000*60*60));

        document.getElementById("minutes").textContent =
            Math.floor((distance%(1000*60*60))/(1000*60));

        document.getElementById("seconds").textContent =
            Math.floor((distance%(1000*60))/1000);

    }

    updateCountdown();

    setInterval(updateCountdown,1000);

}
else{

    document.getElementById("race-name").textContent="Season Complete";
}

