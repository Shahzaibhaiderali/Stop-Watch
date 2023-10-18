const stopwatch = document.getElementById('stopwatch');
let startTime = 0;
let intervalId = null;
let running = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hoursButton = document.getElementById('hours');
const minutesButton = document.getElementById('minutes');
const secondsButton = document.getElementById('seconds');
const millisecondsButton = document.getElementById('milliseconds');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
hoursButton.addEventListener('click', addHour);
minutesButton.addEventListener('click', addMinute);
secondsButton.addEventListener('click', addSecond);
millisecondsButton.addEventListener('click', addMilliseconds);

function start() {
    if (!running) {
        running = true;
        startTime = Date.now() - (startTime || 0);
        intervalId = setInterval(updateClock, 10);
    }
}

function stop() {
    if (running) {
        running = false;
        clearInterval(intervalId);
    }
}

function reset() {
    if (!running) {
        startTime = 0;
        updateClock();
    }
}

function addHour() {
    if (!running) {
        startTime += 3600000; // 1 hour in milliseconds
        updateClock();
    }
}

function addMinute() {
    if (!running) {
        startTime += 60000; // 1 minute in milliseconds
        updateClock();
    }
}

function addSecond() {
    if (!running) {
        startTime += 1000; // 1 second in milliseconds
        updateClock();
    }
}

function addMilliseconds() {
    if (!running) {
        startTime += 6; // 6 milliseconds
        updateClock();
    }
}

function updateClock() {
    const elapsed = running ? Date.now() - startTime : startTime;
    const date = new Date(elapsed);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}