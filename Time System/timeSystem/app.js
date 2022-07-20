/* Dark Mode */
 const darkmode = document.querySelector('.theme > .themeContainer > .toggleButton > #checkbox');
 darkmode.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
 })
/* World Time */

let displayWorldTime = document.querySelector('.worldClock > .worldTime');
let worldTimeNow = document.createElement('h1');
let period = document.querySelector('.worldClock > .worldTime > span');
let timeNow, hoursNow, minutesNow, secondsNow;

function worldTime() {
    timeNow = new Date();
    hoursNow = timeNow.getHours();
    minutesNow = timeNow.getMinutes();
    secondsNow = timeNow.getSeconds();


    if (hoursNow < 12) {
        period = "AM";
    } else {
        period = "PM";
    }

    if (hoursNow < 10) {
        hoursNow = "0" + hoursNow.toString();
    }
    if (minutesNow < 10) {
        minutesNow = "0" + minutesNow.toString();
    }
    if (secondsNow < 10) {
        secondsNow = "0" + secondsNow.toString();
    }

    // period.style.fontSize = "0.9rem";
    worldTimeNow.innerHTML = hoursNow + " : " + minutesNow + " : " + secondsNow + " " + period;
    displayWorldTime.appendChild(worldTimeNow);
    displayWorldTime.toString();
}

setInterval(worldTime, 1000);

/* Stop Watch */
let displayStopWatch = document.querySelector('.stopWatch > .time');
const startStopBtn = document.querySelector('.playContainer');
const resetBtn = document.querySelector('.resetContainer');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timeStatus = "stopped";
let timeInterval = null;

function stopWatch() {
    seconds++;

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    if (seconds / 60 == 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 == 1) {
            minutes = 0;
            hours++;

            if (hours == 24) {
                hours = 0;
            }
        }
    }

    displayStopWatch.innerHTML = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`;
}

startStopBtn.addEventListener('click', function () {
    if (timeStatus == "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        timeStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        timeStatus = "stopped";
    }
});

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    displayStopWatch.innerHTML = "00 : 00 : 00";
});

// window.setInterval(stopWatch, 1);
/* Stop Watch */

/* Alarm */

let addAlarm = document.querySelector('#add-alarm');
let alarmInput = document.querySelector('#input-alarm');
let alarmContainer = document.querySelector('#alarm-container');

addAlarm.addEventListener('click', () => {
    let alarm = document.querySelector('.alarm > .intro > #container > #element');
    // task.classList.add('task');

    let li = document.createElement('li');
    li.style.listStyle = "none";
    li.style.marginTop = "20px";
    li.style.fontSize = "2rem";
    li.innerHTML = `${alarmInput.value}`;
    alarm.appendChild(li);

    // if(li == ""){
    //     alert("Enter a value.");
    // }
})