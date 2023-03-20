/* ♻️♻️♻️♻️Loading♻️♻️♻️♻️ */
window.addEventListener("DOMContentLoaded", function (event) {
    var load = document.getElementById("load");
    var loadEffect = setInterval(function () {
        if (!load.style.opacity) {
            load.style.opacity = 1;
        }
        if (load.style.opacity > 0) {
            load.style.opacity -= 0.3;
        } else {
            clearInterval(loadEffect);
            load.classList.remove("active");
        }
    }, 200);
});

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    const parentDiv = document.getElementById("background");
    const object = document.getElementById("left");
    const marginLeft = parseInt(window.getComputedStyle(object).marginLeft);
    const leftPosition = parentDiv.offsetLeft + marginLeft;
    object.style.left = leftPosition + "px";
});

/* 💫💫💫💫Prevent scroll using Space or Arrows💫💫💫💫 */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

/* 🎮🎮🎮🎮Start🎮🎮🎮🎮 */
document.addEventListener("keydown", start,  { once: true });
document.addEventListener("keydown", backgroundMove,  { once: true });

function start() {
    const button = document.getElementById("play");
    const ground = document.getElementById("ground");
    const sonic = document.getElementById("sonic");
    button.classList.add("hidden");
    sonic.classList.add("run");
    ground.classList.add("move");
    crono();

    sonic.addEventListener("animationend", function () {
        sonic.classList.remove("run");
        ground.style.animationDuration = '9.5s'
        sonic.style.backgroundImage = "url(sprites/sonic-run.gif)";

        game ();
        enemy();
    });

    function backgroundMove() {
        let lastTime = 0;
        let positionX = 0;
        let speed = 50;
    
        function animate(timestamp) {
            if (!lastTime) lastTime = timestamp;
            let elapsed = timestamp - lastTime;
            lastTime = timestamp;
        
            positionX -= (speed * elapsed) / 1000;
        
            background.style.backgroundPositionX = positionX + 'px';
        
            requestAnimationFrame(animate);
        }
    
        requestAnimationFrame(animate);
    }
}