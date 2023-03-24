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

    /* ♾️♾️♾️♾️Theme Color♾️♾️♾️♾️ */
    if(localStorage.dark == "true") {
        darkTheme();
    } else {
        blueTheme();
    }

    /* 🔇🔇🔇🔇Muted🔇🔇🔇🔇 */
    if(localStorage.muted == "true") {
        muteMusic();
    } else {
        unmuteMusic();
    }
    
    if(localStorage.mutedSound == "true") {
        muteSound();
    } else {
        unmuteSound();
    }

    /* 🖼️🖼️🖼️🖼️Pre-loading images🖼️🖼️🖼️🖼️ */
    var imageUrls = ['sprites/sonic-idle.gif', "sprites/sonic-start.gif", "sprites/sonic-run.gif", 
    "sprites/sonic-jump.gif", 'sprites/sonic-damage.gif', 'sprites/Object1.png', 'sprites/Object2.png', 
    'sprites/Object3.gif', 'sprites/Object4.gif', 'sprites/Object5.gif', 'sprites/Object6.png', 
    'sprites/Object7.gif', 'sprites/Object8.gif', 'sprites/badnik1.gif', 'sprites/badnik2.gif', "sprites/ground.png", 
    "sprites/background.gif", 'images/sonic.ico', 'images/Sonic_Runners_logo.png', "sprites/score.png", 
    "images/footer-bg.gif", "images/header.png", 'sprites/life-icon.gif', 'sprites/0.png', 'sprites/1.png', 
    'sprites/2.png', 'sprites/3.png', 'images/sega-dark.png', 'images/footer-bg-dark.gif', 'images/header-dark.jpg'];
    var images = [];
    for (var i = 0; i < imageUrls.length; i++) {
        var img = new Image();
        img.src = imageUrls[i];
        images.push(img);
    }
    /* 🎶🎶🎶🎶Music🎶🎶🎶🎶 */
    Menu.loop = true; 
    Menu.play();

    /* ☄️☄️☄️☄️SEGA/Sonic-Team/SonicR☄️☄️☄️☄️ */
    var SonicRunners = document.getElementById("SonicRunners");
    SonicRunners.addEventListener('mouseover', function() {
        SonicR.play();
    });

    var Sega = document.getElementById("SEGA");
    Sega.addEventListener('mouseover', function() {
        SEGA.play();
    });

    var Sonic_Team = document.getElementById("SonicTeam");
    Sonic_Team.addEventListener('mouseover', function() {
        if (SonicTeam.currentTime <= 1 || SonicTeam.currentTime >= 7) {
            SonicTeam.currentTime = 1.5;
            SonicTeam.play();
        }
    });
});

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
    Menu.currentTime = 171.5;
    GreenHill.loop = true; 
    GreenHill.play();
    StartTrack.currentTime = 0.7;
    StartTrack.play();
    HigherScoreHit.currentTime = 3;

    document.removeEventListener("keydown", wait,  { once: true });
    const button = document.getElementById("play");
    const play = document.getElementById("play-txt");
    const sonic = document.getElementById("sonic");
    button.classList.add("hidden");
    play.classList.add("hidden");
    sonic.classList.add("run");
    crono();

    sonic.addEventListener("animationend", function () {
        sonic.classList.remove("run");
        sonic.style.backgroundImage = "url(sprites/sonic-run.gif)";

        game ();
        enemy();
    });
}