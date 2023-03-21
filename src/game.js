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
    const object4 = document.getElementById("object4");
    object4.addEventListener("animationend", objRespawn);
}

function objInterval() {
    clearInterval(object);
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
    const object2 = document.getElementById("object2");
    const object3 = document.getElementById("object3");
    const object4 = document.getElementById("object4");

    if ((timerObj += 10) == (1500)) {
        decoration.classList.add("move");
        decoration.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 3000) {
        object2.classList.add("move");
        object2.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 3700) {
        object3.classList.add("move");
        object3.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 5200) {
        timerObj = 0;
        object4.classList.add("move");
        object4.style.backgroundImage = `url(${objectBackground})`;
    }
}

function objRespawn() {
    const decoration = document.querySelector(".object");
    const object2 = document.getElementById("object2");
    const object3 = document.getElementById("object3");
    const object4 = document.getElementById("object4");
    decoration.classList.remove("move");
    object2.classList.remove("move");
    object3.classList.remove("move");
    object4.classList.remove("move");
    objInterval();
}