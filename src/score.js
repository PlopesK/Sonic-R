let millisecond = 0;
let points = 0;
let cron;

function crono(){
    pause();
    cron = setInterval(() => { score(); }, 10);
}
    
function pause() {
    clearInterval(crono);
}
    
 function score(){
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        points++;
    }
    document.getElementById('score').innerText = returnData(points);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}