/* Enemmy */
let timer = 0;

function enemy(){
    stop();
    clock = setInterval(() => { spawn(); }, 10);
}
    
function stop() {
    clearInterval(enemy);
}
    
function spawn(){
    const bug = document.getElementById("badnik1");
    const fly = document.getElementById("badnik2");
    if ((timer += 10) == 3000) {
        bug.classList.add("block")
    } if (timer == 6000){
        timer = 0;
        fly.classList.add("flying");
    }
    bug.addEventListener("animationend", bugRespawn);
    fly.addEventListener("animationend", flyRespawn);
}

function bugRespawn() {
    const bug = document.getElementById("badnik1");
    bug.classList.remove("block");
    bug.removeEventListener("animationend", respawn);
    respawn();
}

function flyRespawn() {
    const fly = document.getElementById("badnik2");
    fly.classList.remove("flying");
    fly.removeEventListener("animationend", respawn);
    respawn();
}

function respawn() {
    clearTimeout(bugRespawn);
    clearTimeout(flyRespawn);
    setTimeout(function () {
        enemy;
    }, 5000);
}