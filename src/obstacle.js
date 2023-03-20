/* 👾👾👾👾Enemy👾👾👾👾 */
let timer = 0;
let minDuration = 1500;

function enemy(){
    stop();
    clearTimeout(respawn);
    clock = setInterval(() => { spawn(); }, 10);
}
    
function stop() {
    clearInterval(enemy);
}
    
function spawn(){
    const bug = document.getElementById("badnik1");
    const fly = document.getElementById("badnik2");
    if ((timer += 10) == (minDuration + 1000)) {
        bug.classList.add("block")
    } if (timer == (minDuration + 2500)){
        timer = 0;
        fly.classList.add("flying");
    }
    bug.addEventListener("animationend", bugRespawn);
    fly.addEventListener("animationend", flyRespawn);
}

function bugRespawn() {
    const bug = document.getElementById("badnik1");
    const minDuration = 1500;
    const maxDuration = 2500;
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
    const animationDuration = `${randomDuration / 1000}s`;
    bug.style.animationDuration = animationDuration;

    bug.classList.remove("block");
    bug.removeEventListener("animationend", respawn);
    bugrestart = setTimeout(respawn, 5000);
}

function flyRespawn() {
    const fly = document.getElementById("badnik2");
    const minDuration2 = 1000;
    const maxDuration2 = 3000;
    const randomDuration2 = Math.floor(Math.random() * (maxDuration2 - minDuration2 + 1)) + minDuration2;
    const animationDuration2 = `${randomDuration2 / 1000}s`;
    fly.style.animationDuration = animationDuration2;

    fly.classList.remove("flying");
    fly.removeEventListener("animationend", respawn);
    flyrestart = setTimeout(respawn, 8000);
}

function respawn() {
    clearTimeout(bugrestart);
    clearTimeout(flyrestart);
    setTimeout(enemy, 5000);
}