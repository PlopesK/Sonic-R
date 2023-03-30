/* 🎮🎮🎮🎮Game🎮🎮🎮🎮 */
let lifes = 3;
let canLoseLife = true;

function game() {
    const sonic = document.getElementById("sonic");
    const bug = document.getElementById("badnik1");
    const fly = document.getElementById("badnik2");
    const lifesDisplay = document.getElementById("lifes");

    /* 💥💥💥💥Sonic Damage Animation💥💥💥💥 */
    const sonicHit = [
        {backgroundImage: 'url(sprites/sonic-damage.gif)', opacity: 1},
        {opacity: 0},
        {opacity: 1},
        {backgroundImage: 'url(sprites/sonic-damage.gif)', opacity: 0},
        {backgroundImage: 'url(sprites/sonic-run.gif)', opacity: 1}
    ]

    const sonicHitTimming = {
        duration: 500,
        iterations: 1,
    }

    function sonicDamage() {
        sonic.animate(sonicHit, sonicHitTimming);
    }

    /* 💓💓💓💓Hit/Life System💓💓💓💓 */
    function checkCollision() {
    let sonicTop = parseInt(
        window.getComputedStyle(sonic).getPropertyValue("top"));

    let obstLeft = parseInt(
        window.getComputedStyle(bug).getPropertyValue("left"));
    
    let obsTop = parseInt(
        window.getComputedStyle(fly).getPropertyValue("left"));

    if (obstLeft < 60 && obstLeft > 0 && sonicTop >= 140 && canLoseLife == true || 
        obsTop < 60 && obsTop > 0 && sonicTop <= 120 && sonicTop >= 40 && canLoseLife == true) {   
            HitDamage.currentTime = 0.2;
            HitDamage.play();
            sonicDamage();
            canLoseLife = false;
            if (lifes <= 0) {
                gameOver();
            } else {
                setTimeout(() => {
                    lifes -= 1;
                    if (lifes == 2) {
                        lifesDisplay.style.backgroundImage = 'url(sprites/2.png)';
                    }
                    if (lifes == 1) {
                        lifesDisplay.style.backgroundImage = 'url(sprites/1.png)';
                    } else if (lifes == 0) {
                        lifesDisplay.style.backgroundImage = 'url(sprites/0.png)';
                    }
                    canLoseLife = true;
                }, 500);
            }
        }
    } 

    function gameOver() {
        isGameOver = true;
        Game.loop = false;
        Game.pause();
        gameoverscore();
        gameoverenemy();
        gameoverobject();

        const GameOverScreen = document.getElementById('gameover');
        GameOverScreen.classList.remove("hidden");

        GameOver.loop = true; 
        GameOver.play();
    }

    setInterval(checkCollision, 100);

    /* 🆙🆙🆙🆙Jump🆙🆙🆙🆙 */
    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            Jump.currentTime = 0.4;
            Jump.play();

            Jump.addEventListener("ended", function() {
                sonic.classList.remove("jump");
            });

            ['keydown', 'click'].forEach(function(e) {
                document.addEventListener(e, sonicDJump, {once: true});
                setTimeout (() => {
                    document.removeEventListener(e, sonicDJump, {once: true});
                }, 400);
            });
        }
    }

    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function () {
            jump();
        });
    });

    /* 🌀🌀🌀🌀Sonic Double Jump Animation🌀🌀🌀🌀 */
    const sonicDoubleJump = [
        {backgroundImage: 'url(sprites/sonic-doublejump.gif)', top: '9vh'},
        {top: '0vh'},
        {top: '0vh'},
        {top: '0vh'},
        {top: '11vh'},
        {backgroundImage: 'url(sprites/sonic-doublejump.gif)', top: '18.6vh'},
        {top: '23vh'}
    ]

    const sonicDJumpTimming = {
        duration: 750,
        iterations: 1,
    }

    function sonicDJump() {
        DoubleJump.play();
        sonic.animate(sonicDoubleJump, sonicDJumpTimming);
    }
}

/* 🏞️🏞️🏞️🏞️Background Moving🏞️🏞️🏞️🏞️ */
let lastTime = 0;
let speed = 100;
let speedGround = 200;
let isGameOver = false;

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

        if (!isGameOver) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

/* 🌴🌴🌴🌴Objects Moving🌴🌴🌴🌴 */
const OBJECTS = ['sprites/Object1.png', 'sprites/Object2.png', 'sprites/Object3.gif', 
'sprites/Object4.gif', 'sprites/Object5.gif', 'sprites/Object6.png', 'sprites/Object7.gif', 'sprites/Object8.gif'];
let objIntervalId = 0;
let timerObj = 0;
let BgTimer = 0;
let BgInterval;
let ObjInterval;

function object() {
    objInterval();
    ObjInterval = setInterval(() => { objectSpawn(); }, 10);
    BgInterval = setInterval(() => { BGObjSpawn(); }, 10);
    const object5 = document.getElementById("object5");
    object5.addEventListener("animationend", objRespawn);
    const bg2 = document.getElementById("bg-object2");
    bg2.addEventListener("animationend", BGObjRespawn);
}

function objInterval() {
    clearInterval(object);
}

function gameoverobject() {
    clearInterval(ObjInterval);
    clearInterval(BgInterval);
    const object5 = document.getElementById("object5");
    object5.classList.add("hidden");
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

    if ((timerObj += 10) == (1400)) {
        object1.classList.add("move");
        object1.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 2300) {
        object2.classList.add("move");
        object2.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 2800) {
        object3.classList.add("move");
        object3.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 3400) {
        object4.classList.add("move");
        object4.style.backgroundImage = `url(${objectBackground})`;
    } if (timerObj == 4000) {
        timerObj = 0;
        object5.classList.add("move");
        object5.style.backgroundImage = `url(${objectBackground})`;
    }
}

function BGObjSpawn() {
    const objectBackground = randItem(OBJECTS);
    const bg1 = document.getElementById("bg-object1");
    const bg2 = document.getElementById("bg-object2");

    if ((BgTimer += 10) == (2000)) {
        bg1.classList.add("move");
        bg1.style.backgroundImage = `url(${objectBackground})`;
    } if (BgTimer == 3800) {
        BgTimer = 0
        bg2.classList.add("move");
        bg2.style.backgroundImage = `url(${objectBackground})`;
    }
}

function BGObjRespawn() {
    const bg1 = document.getElementById("bg-object1");
    const bg2 = document.getElementById("bg-object2");
    bg1.classList.remove("move");
    bg2.classList.remove("move");
    objInterval();
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