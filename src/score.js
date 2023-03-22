/* 🎰🎰🎰🎰Score🎰🎰🎰🎰 */
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
    const score = document.getElementById('points');
    if ((millisecond += 10) == 100) {
        millisecond = 0;
        points++;
    } 
    if (points % 100 === 0) {
        score.classList.add("scoreAnimation");
        ScoreHit.play();

        ScoreHit.addEventListener("ended", function() {
            score.classList.remove("scoreAnimation");
        });
    }
    score.innerText = returnData(points);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}