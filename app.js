// for start pomo, we want display the amount of time i.e. 25 min - (Date.now())
// we can have a start pomo and update pomo like in the stopwatch quesiton
// 60'000 ms in one minute
// when timeLeft reaches 0 we can stop the id
// in our stopwatch function timeleft was equal to paused + Date.now - startTime
// in our pomo function timeleft can be 25 * 60'000 -  (paused + Date.now() - startTime)
// in our stopwatch function paused time was paused + Date.now() - startTime
// in our pomo function pause can equal to paused - (paused + Date.now() - startTime());
// minute can be equal to Math.floor(timeLeft % (60'000) )
// second can equal timeLeft - minutes * 60'000
// ms = timeLeft - minutes * 60'000 - ]

let startTime;
let timeLeft;
let pausedTime = 0;
let running = false;
let paused = true;
let justReset = false;

const $minutes = document.querySelector(".timer__minutes");
const $seconds = document.querySelector(".timer__seconds");
const $millis = document.querySelector(".timer__milliseconds");
const $title = document.querySelector("h1");
const $backGround = document.querySelector("#stopwatch")
let fullTime;
let numPeriods = 0;

// cycle: 0 study, 1 break, 2 study, 3 break, 4 study, 5 break, 6 study, 7 break, cycle repeats at 8
// if (numPeriods == 8) {
//     fullTime = 3 * 1000;
//     $title.textContent = "longBreak";
// } else if (numPeriods % 2 == 0)  {
//     fullTime = 6 * 1000;
//     $title.textContent = "Pomofocus";
// } else {
//     fullTime = 2 * 1000;
//     $title.textContent = "shortBreak";
// }

let stopId;

let message;


function startPomo() {
    if (running) {
        alert("already running");
        return;
    }
    if (numPeriods == 7) {
        fullTime = 2 * 1000;
        $title.textContent = "longBreak";
    } else if (numPeriods % 2 == 0)  {
        fullTime = 3 * 1000;
        $title.textContent = "Pomofocus";
    } else {
        fullTime = 1 * 1000;
        $title.textContent = "shortBreak";
    }
    running = true;
    paused = false;
    justReset = false;
    startTime = Date.now();
    requestAnimationFrame(updatePomo)
    console.log("request")

}
function updatePomo() {
    timeLeft = fullTime - (pausedTime + Date.now() - startTime);
    // minutesLeft = Math.floor(timeLeft / 60000);
    // console.log(`timeLeft is ${timeLeft}, ${minutesLeft}`)
    // secondsLeft = Math.floor((timeLeft - minutesLeft * 60000) / 1000);
    // millisLeft = timeLeft - 60000 * minutesLeft - 1000 * secondsLeft;
    // $minutes.textContent = minutesLeft;
    // $seconds.textContent = secondsLeft;
    // $millis.textContent = millisLeft;
    $minutes.textContent = "tamint";
    $seconds.textContent = "tami";
    $millis.textContent = timeLeft;
    console.log(numPeriods);

    stopId = requestAnimationFrame(updatePomo)
    if (timeLeft <= 100) {
        numPeriods++;
        console.log(numPeriods);
        running = false;
        cancelAnimationFrame(stopId);
    }
}

function stopPomo() {
    if (paused || justReset) {
        alert("pomo is paused already");
        return;
    }
    paused = true;
    running = false;
// in our pomo function pause can equal to paused - (paused + Date.now() - startTime());
    cancelAnimationFrame(stopId);
    pausedTime = pausedTime +  Date.now() - startTime;
// in our stopwatch function paused time was paused + Date.now() - startTime
    // pausedTime = fullTime - (pausedTime + Date.now() - startTime);
}

function resetPomo() {
    if (justReset) {
        return;
    }
    justReset = true;
    timeLeft = fullTime;
    startTime = 0;
    pausedTime = 0;
    running = false;
    paused = true;
    // $minutes.textContent = fullTime / 60000;
    // $seconds.textContent = "00";
    // $millis.textContent = "000";
    $minutes.textContent = "time";
    $seconds.textContent = "to";
    $millis.textContent = "due";
    numPeriods = 0;
    cancelAnimationFrame(stopId);

}