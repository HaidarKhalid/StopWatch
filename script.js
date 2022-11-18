let outSec = document.getElementById("out-sec")
let outMin = document.getElementById("out-min")
let sec = 0 
let min = 0 
let pause = false
let time;
let running = false;
var timergo;


function start(num) {
    if (pause == false && running == false) {
        clearInterval(timergo)
    sec = num

    timergo = setInterval(() => {
        if (sec < 10) {
            sec++
            outSec.innerText = sec
        } else if (sec >= 10 ) {
            min++
            sec = 0
            outSec.innerText = sec
            outMin.innerText = min
        }
    }, 1000)
    running = true
} else if (pause == true  && running == false) {
    running = true
    clearInterval(timergo)
    pause = false
    
    timergo = setInterval(() => {
        if (sec < 10) {
            sec++
            outSec.innerText = sec
        } else if (sec >= 10 ) {
            min++
            sec = 0
            outSec.innerText = sec
            outMin.innerText = min
        }
    }, 1000)
}

}

function stop() {
    pause = true
    clearInterval(timergo)
    running = false
}

function reset() {
    console.log(0)
    clearInterval(timergo) 
    sec = 0
    min = 0
    running = false
    pause = true
    
    outSec.innerText = 0
    outMin.innerText = 0
}
