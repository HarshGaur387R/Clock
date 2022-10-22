let d = new Date
let hourArrow = document.getElementById('hour');
let minuteArrow = document.getElementById('minute');
let secondArrow = document.getElementById('second');

function printDate(){
    d = new Date

    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    hourArrow.style.transform = `rotate(${30*hours + minutes/2}deg)`;
    minuteArrow.style.transform = `rotate(${6*minutes}deg)`;
    secondArrow.style.transform = `rotate(${6*seconds}deg)`;
}

setInterval(printDate,1000)