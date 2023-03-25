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
    /* Menu Music */
    if (storedIndex !== null) {
        musicIndex = parseInt(storedIndex);
        var music = Menu;
        music.src = musicList[musicIndex];
        music.loop = true;
        music.play();
    }

    /* Game Music */
    if (storedGameIndex !== null) {
        gameMusicIndex = parseInt(storedIndex);
        var gameMusic = Game;
        gameMusic.src = gameMusicList[gameMusicIndex];
        gameMusic.loop = true;
    }

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
});