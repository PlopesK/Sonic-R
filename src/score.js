/* 🎰🎰🎰🎰Score🎰🎰🎰🎰 */
let millisecond = 0;
let points = 0;
let highScore = 0;
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
    const yourScore = document.getElementById('earned-points');
    const HighScore = document.getElementById('highscore');
    const NewHS = document.getElementById('newhighscore');

        if (!isGameOver) {
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
            } if (points % 500 === 0) {
                ScoreHit.pause();
                HigherScoreHit.play();

                HigherScoreHit.addEventListener("ended", function() {
                    score.classList.remove("scoreAnimation");
                });
            } if (points > highScore) {
                highScore = points;
                localStorage.setItem('highScore', highScore);
                NewHS.classList.remove("hidden");
            }
        }
    score.innerText = returnData(points)
    yourScore.innerText = 'Score: ' + returnData(points);
    HighScore.innerText = 'HighScore: ' + returnData(highScore);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

window.onload = function() {
    highScore = localStorage.getItem('highScore') || 0;
}