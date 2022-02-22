const greeting = document.querySelector('.greeting');
const weekDay = document.querySelector('.week-day');
const timeNow = document.querySelector('.time-now');
const newYear= document.querySelector('.new-year');
let phrase = '';

function count() {
    let today = new Date();
    let hours = today.getHours();
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = today.getDay();
    let time = today.toLocaleTimeString('en');
    let newYearDate = new Date('31 december 2022 23:59:59');
    let period = Math.ceil((newYearDate.getTime() - today.getTime()) / 1000 / 60 / 60 / 24);

    return {hours, week, day, time, period}
}
function text() {
    let info = count();
    if (info.hours >= 6 && info.hours <12) {
    phrase = 'Доброе утро!'
} else if (info.hours >= 12 && info.hours <18) {
    phrase = 'Добрый день!'
} else if (info.hours >= 18 && info.hours <23) {
    phrase = 'Добрый вечер!'
} else {
    phrase = 'Доброй ночи!'
}

greeting.textContent = phrase;
weekDay.textContent = `Сегодня: ${info.week[info.day]}`;
timeNow.textContent = `Текущее время: ${info.time}`;
newYear.textContent = `До нового года осталось ${info.period} дней`
}

setInterval(text, 1000)



