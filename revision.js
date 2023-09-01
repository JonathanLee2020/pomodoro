// we need a function that activates when we press start, when we press stop and when we press reset
// when we press start, the current time on the screen should be hte formula fullTIme - ( date.now - startTIme + pausedTime )
// when we press pauseTime, the current amount of time on the screen should be stopped with the formula pausedTime = pausedTime + date.now -starTime
// when we press resetTImer, I have no idea

// I know when we press startTimer we also call updateTimer, we can try that now


const $minutes = document.querySelector(".timer__minutes");
const $seconds = document.querySelector(".timer__seconds");
const $millis = document.querySelector(".timer__millis");
const $backGround = document.querySelector(."pomoApp");
// it's an 8 day split: day 1,3,5,7 are study sessions, days 2,4,6 are shortBreaks and day 8 is a longBreak

console.log($minutes)
console.log("hell")

const studyTime = 7000;
const shortBreak= 3000;
const longBreak= 5000;
let startTime;
let cancelId;
let pausedTime = 0;

function startTimer () {
    console.log(`you've pressed startTimer`)
    startTime = Date.now();
    requestAnimationFrame(updateTimer);
}

function updateTimer () {
    const millisLeft = studyTime - (Date.now() - startTime + pausedTime);
    const secondsLeft = Math.floor(millisLeft / 1000);
    const minutesLeft = Math.floor(secondsLeft / 60);
    $seconds.textContent = secondsLeft;
    $millis.textContent = millisLeft;
    $minutes.textContent = minutesLeft;
    console.log(millisLeft)
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer () {
    cancelAnimationFrame(cancelId);
    pausedTime = pausedTime + Date.now() - startTime;
}