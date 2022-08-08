const hr = document.querySelector('#hours');
const min = document.querySelector('#minutes');
const sec = document.querySelector('#seconds');

function setTime () {
    const dateTime = new Date();

    hr.innerHTML = dateTime.getHours();
    min.innerHTML = dateTime.getMinutes();
    sec.innerHTML = dateTime.getSeconds();
}

setInterval(setTime, 100);