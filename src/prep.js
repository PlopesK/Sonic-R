/* ♻️♻️♻️♻️Loading♻️♻️♻️♻️ */
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
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

window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
});

/* 💫💫💫💫Prevent scroll using Space or Arrows💫💫💫💫 */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

/* 🎮🎮🎮🎮Start🎮🎮🎮🎮 */
document.addEventListener("keydown", start, { once: true });

function start() {
    const button = document.getElementById("play");
    const background = document.getElementById("background");
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
        background.classList.add("background");

        game ();
        enemy();
    });
}