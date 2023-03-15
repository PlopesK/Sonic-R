/* 🎰🎰🎰🎰Score🎰🎰🎰🎰 */
let millisecond = 0;
let second = 0;
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
    if ((millisecond += 10) == 100) {
        millisecond = 0;
        points++;
    }

    document.getElementById('points').innerText = returnData(points);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}