/* 🎮🎮🎮🎮Game🎮🎮🎮🎮 */
function game() {
    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            Jump.currentTime = 0.4;
            Jump.play();
            
            Jump.addEventListener("ended", function() {
                sonic.classList.remove("jump");
            });
        }  
    }
    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function () {
            jump();
        });
    });

    /* Hit/Life System */
    const sonic = document.getElementById("sonic");
    const bug = document.getElementById("badnik1");
    const fly = document.getElementById("badnik2");
    const lifesDisplay = document.getElementById("lifes");
    let lifes = 3;
    let isPaused = false;
    let canLoseLife = true;

    function checkCollision() {
    if (isPaused) {
        return;
    }

    let sonicTop = parseInt(
        window.getComputedStyle(sonic).getPropertyValue("top"));

    let obstLeft = parseInt(
        window.getComputedStyle(bug).getPropertyValue("left"));
    
    let obsTop = parseInt(
        window.getComputedStyle(fly).getPropertyValue("left"));

    if (obstLeft < 40 && obstLeft > 0 && sonicTop >= 140 && canLoseLife == true || 
        obsTop < 40 && obsTop > 0 && sonicTop <= 140 && canLoseLife == true) {   
            canLoseLife = false;
            if (lifes <= 0) {
                gameOver();
            } else {
                lostLife();
            }
        }
    }

    function lostLife() {
        setTimeout(() => {
            lifes -= 1;
            if (lifes <= 0) {
                lifes = 0;
            }
            canLoseLife = true;
            lifesDisplay.innerHTML = 'Lifes: ' + lifes;
        }, 500);
    }

    function gameOver() {
        GreenHill.loop = false;
        GreenHill.currentTime = 257;

        GameOver.loop = true; 
        GameOver.play();

        isPaused = true;
        alert("Game Over");
        location.reload()
    }

    setInterval(checkCollision, 100);
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

/* 🌴🌴🌴🌴Objects Moving🌴🌴🌴🌴 */
const OBJECTS = ['sprites/Object1.png', 'sprites/Object2.png'];
let objIntervalId = 0;
let timerObj = 0;

function object() {
    objInterval();
    setInterval(() => { objectSpawn(); }, 10);
    const object5 = document.getElementById("object5");
    object5.addEventListener("animationend", objRespawn);
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
    const object1 = document.getElementById("object1");
    const object2 = document.getElementById("object2");
    const object3 = document.getElementById("object3");
    const object4 = document.getElementById("object4");
    const object5 = document.getElementById("object5");

    if ((timerObj += 10) == (2000)) {
        object1.classList.add("move");
        object1.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 3000) {
        object2.classList.add("move");
        object2.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 3400) {
        object3.classList.add("move");
        object3.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 4400) {
        object4.classList.add("move");
        object4.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 5500) {
        timerObj = 0;
        object5.classList.add("move");
        object5.style.backgroundImage = `url(${objectBackground})`;
    }
}

function objRespawn() {
    const object1 = document.getElementById("object1");
    const object2 = document.getElementById("object2");
    const object3 = document.getElementById("object3");
    const object4 = document.getElementById("object4");
    const object5 = document.getElementById("object5");

    object1.classList.remove("move");
    object2.classList.remove("move");
    object3.classList.remove("move");
    object4.classList.remove("move");
    object5.classList.remove("move");
    objInterval();
}