/* 🎮🎮🎮🎮Game🎮🎮🎮🎮 */
function game() {
    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            
            setTimeout(function () {
                sonic.classList.remove("jump");
            }, 400);
        }   
    }
    
    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function () {
            jump();
        });
    });
}

/* 🏞️🏞️🏞️🏞️Background Moving🏞️🏞️🏞️🏞️ */
let lastTime = 0;
let speed = 100;
let speedGround = 200;
function backgroundMove() {
    let positionX = 0;
    let positionXG = 0;
    const ground = document.getElementById("ground");

    function animate(timestamp) {
        if (speed >= 400 && speedGround >= 600){
            speed = 400;
            speedGround = 600;
        }
        else {
            speed++;
            speedGround++;
        }
        if (!lastTime) lastTime = timestamp;
        let elapsed = timestamp - lastTime;
        lastTime = timestamp;

        positionX -= ((speed * elapsed) / 1000);
        positionXG -= ((speedGround * elapsed) / 1000);

        background.style.backgroundPositionX = positionX + 'px';
        ground.style.backgroundPositionX = positionXG + 'px';

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

/* Objects Moving */
const OBJECTS = ['sprites/Object1.png', 'sprites/Object2.png'];
let objIntervalId = 0;
let timerObj = 0;

function object() {
    objInterval();
    setInterval(() => { objectSpawn(); }, 10);
    const decoration = document.querySelector(".object");
    decoration.addEventListener("animationend", objRespawn);
}

function objInterval() {
    clearInterval(objIntervalId);
}

function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randItem(arr) {
    return arr[randInteger(0, arr.length - 1)];
}

function objectSpawn() {
    const objectBackground = randItem(OBJECTS);
    const decoration = document.querySelector(".object");
    if ((timerObj += 10) == (3000)) {
        timerObj = 0;
        decoration.classList.add("move");
        decoration.style.backgroundImage = `url(${objectBackground})`;
    }
}

function objRespawn() {
    const decoration = document.querySelector(".object");
    const minDuration = 2500;
    const maxDuration = 3500;
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
    const animationDuration = `${randomDuration / 1000}s`;
    decoration.style.animationDuration = animationDuration;
    decoration.classList.remove("move");
    objInterval();
    objIntervalId = setInterval(() => { objectSpawn(); }, randomDuration);
}