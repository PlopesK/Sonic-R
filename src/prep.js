/* 🖥️🖥️🖥️🖥️Window Animation🖥️🖥️🖥️🖥️ */
(function() {
    var requestAnimationFrame = window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame || 
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;
  
    window.requestAnimationFrame = requestAnimationFrame;
})();

/* 🖥️🖥️🖥️🖥️Window Resize🖥️🖥️🖥️🖥️ */
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    const parentDiv = document.getElementById("background");
    const objectL = document.getElementById("left");
    const objectR = document.getElementById("right");
    const marginLeft = parseInt(window.getComputedStyle(objectL).marginLeft);
    const marginRight = parseInt(window.getComputedStyle(objectR).marginRight);
    const leftPosition = parentDiv.offsetLeft + marginLeft;
    const rightPosition = parentDiv.offsetLeft + marginRight;
    objectL.style.left = leftPosition + "px";
    objectR.style.left = rightPosition + "px";
});

/* 💫💫💫💫Prevent scroll using Space or Arrows💫💫💫💫 */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

/* 🎮🎮🎮🎮Start🎮🎮🎮🎮 */
function wait() {
    start();
    backgroundMove();
    object();
}
document.addEventListener("keydown", wait,  { once: true });

function start() {
    Menu.loop = false;
    Menu.volume = 0.2;
    Menu.pause();

    Game.currentTime = 0;
    Game.loop = true; 
    Game.play();
    
    StartTrack.currentTime = 0.7;
    StartTrack.play();
    HigherScoreHit.currentTime = 3;

    document.removeEventListener("keydown", wait,  { once: true });
    document.getElementById("charArea").style.display = 'none';
    const tohide = document.querySelectorAll(".hid");
    const sonic = document.getElementById("sonic");
    tohide.forEach(element => {
        element.classList.add("hidden");
    });
    sonic.classList.add("run");
    crono();

    sonic.addEventListener("animationend", function () {
        sonic.classList.remove("run");
        sonic.style.backgroundImage = 'var(--Run)';

        game ();
        enemy();
    });
}