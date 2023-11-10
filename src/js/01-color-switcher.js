
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timeInterval = null;



startBtn.addEventListener("click",changeColorInTime);
stopBtn.addEventListener('click', stopColorChange);


function changeColorInTime () {
   timeInterval = setInterval(getRandomHexColor,1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopColorChange () {
   clearInterval(timeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


function getRandomHexColor() {
    return bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
