   window.addEventListener("DOMContentLoaded", function() {

   const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0) 200px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('touchmove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.8) 300px)';

        updateSpotlight(e);

    });
    window.addEventListener('touchstart', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0) 150px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0) 200px)';

        updateSpotlight(e);

    });

    window.addEventListener('touchend', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0) 100px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;

    }

    let startLine = "2000-05-07";

    function getTimeRemaining(startTime) {
        let t = Date.parse(new Date()) - Date.parse(startTime),
            years = Math.floor(t/3.154e+10);
            months = Math.floor((t/2.628e+9) % 12),
            days = Math.floor( ((t - (years * 3.154e+10)) - (months * 2.628e+9)) / 8.64e+7 );

            return {
                "total" : t,
                "years" : years,
                "months" : months,
                "days" : days
            };
    }

    function setClock(id, startTime) {
        let timer = document.getElementById(id),
            years = timer.querySelector(".years"),
            months = timer.querySelector(".months"),
            days = timer.querySelector(".days"),
            timeInterval = setInterval(updateClock, 2,7778e-7);

            function updateClock() {
                let t = getTimeRemaining(startTime);
                years.textContent = t.years;
                months.textContent = t.months;
                days.textContent = t.days;
                }
            }

    setClock("timer", startLine);
});