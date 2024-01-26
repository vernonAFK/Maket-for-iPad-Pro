const clock = document.getElementById('clock');
const small_clock = document.getElementById('small-clock'); 
const date = document.getElementsByClassName('date');
const day = document.getElementById('day');
const month = document.getElementsByClassName('month');
const taxi_time = document.getElementById('taxi-time');
const balance = document.getElementById('balance');
const minute = document.getElementById('minute');

var today;
var todayHours;
var todayMinutes;
var todaySeconds;
var todayDate;

setInterval(() => {
    today = new Date();
    todayHours =  today.getHours(); // возвращает количество часов
    todayMinutes = today.getMinutes(); // возвращает количество минут
    todaySeconds = today.getSeconds(); // возвращает количество секунд
    todayDate = today.getDate();
    
    switch(today.getDay()) {
        case 1:
            day.innerHTML = "ПОНЕДЕЛЬНИК";
            break;
        case 2:
            day.innerHTML = "ВТОРНИК";
            break;
        case 3:
            day.innerHTML = "СРЕДА";
            break;
        case 4:
            day.innerHTML = "ЧЕТВЕРГ";
            break;
        case 5:
            day.innerHTML = "ПЯТНИЦА";
            break;
        case 6:
            day.innerHTML = "СУББОТА";
            break;
        case 0:
            day.innerHTML = "ВОСКРЕСЕНЬЕ";
            break;
    }

    switch(today.getMonth()) {
        case 0:
            month[0].innerHTML = "01"
            month[1].innerHTML = "ЯНВАРЬ"
            break;
        case 1:
            month[0].innerHTML = "02"
            month[1].innerHTML = "ФЕВРАЛЬ"
            break;
        case 2:
            month[0].innerHTML = "03"
            month[1].innerHTML = "МАРТ"
            break;
        case 3:
            month[0].innerHTML = "04"
            month[1].innerHTML = "АПРЕЛЬ"
            break;
        case 4:
            month[0].innerHTML = "05"
            month[1].innerHTML = "МАЙ"
            break;
        case 5:
            month[0].innerHTML = "06"
            month[1].innerHTML = "ИЮНЬ"
            break;
        case 6:
            month[0].innerHTML = "07"
            month[1].innerHTML = "ИЮЛЬ"
            break;
        case 7:
            month[0].innerHTML = "08"
            month[1].innerHTML = "АВГУСТ"
            break;
        case 8:
            month[0].innerHTML = "09"
            month[1].innerHTML = "СЕНТЯБРЬ"
            break;
        case 9:
            month[0].innerHTML = "10"
            month[1].innerHTML = "ОКТЯБРЬ"
            break;
        case 10:
            month[0].innerHTML = "11"
            month[1].innerHTML = "НОЯБРЬ"
            break;
        case 11:
            month[0].innerHTML = "12"
            month[1].innerHTML = "ДЕКАБРЬ"
            break;
    }

    clock.innerHTML = todayHours + ":" + todayMinutes + ":" + todaySeconds;
    small_clock.innerHTML = todayHours + ":" + todayMinutes;
    date[0].innerHTML = todayDate;
    date[1].innerHTML = todayDate;

    if (todayDate < 10) {
        date[0].innerHTML = todayDate;
        date[1].innerHTML = "0" + todayDate;
    }

    if (todaySeconds < 10) {
        clock.innerHTML = todayHours + ":" + todayMinutes + ":0" + todaySeconds;
    }

    if (todayMinutes < 10) {
        clock.innerHTML = todayHours + ":0" + todayMinutes + ":" + todaySeconds;
        small_clock.innerHTML = todayHours + ":0" + todayMinutes;
    }

    if (todayHours < 10) {
        clock.innerHTML = "0" + todayHours + ":" + todayMinutes + ":" + todaySeconds;
        small_clock.innerHTML = "0" + todayHours + ":" + todayMinutes;
    }

    if (todaySeconds < 10 && todayMinutes < 10) {
        clock.innerHTML = todayHours + ":0" + todayMinutes + ":0" + todaySeconds;
    }

    if (todaySeconds < 10 && todayHours < 10) {
        clock.innerHTML = "0" + todayHours + ":" + todayMinutes + ":0" + todaySeconds;
    }

    if (todayMinutes < 10 && todayHours < 10) {
        clock.innerHTML = "0" + todayHours + ":0" + todayMinutes + ":" + todaySeconds;
        small_clock.innerHTML = "0" + todayHours + ":0" + todayMinutes;
    }

    if (todaySeconds < 10 && todayMinutes < 10 && todayHours < 10) {
        clock.innerHTML = "0" + todayHours + ":0" + todayMinutes + ":0" + todaySeconds;
    }
}, 100)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

taxi_time.innerHTML = getRandomInt(1, 30);
balance.innerHTML = getRandomInt(5, 25) + " " + getRandomInt(100, 1000) + "," + getRandomInt(12, 98) + " ₽";

setInterval(() => {
    balance.innerHTML = getRandomInt(5, 25) + " " + getRandomInt(100, 1000) + "," + getRandomInt(12, 98) + " ₽";
}, 60000);

const intervalId = setInterval(() => {
    taxi_time.innerHTML = taxi_time.innerHTML - 1;

    if (taxi_time.innerHTML == 0) {
        taxi_time.innerHTML = "Такси тут";
        minute.style = "opacity: 0; display: hidden;";
        clearInterval(intervalId);
    }
}, 60000);
