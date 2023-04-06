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
            setTimeout(function(){
                window.scrollTo(0, 1);
            }, 0);
            clearInterval(loadEffect);
            load.classList.remove("active");
        }
    }, 200);

    const play = document.getElementById("play-txt");
    if (( window.innerWidth <= 800 ) || (window.innerHeight > window.innerWidth)){
        play.innerHTML="Tap the button to start!";
    } else {
        play.innerHTML="Press any key or click the button to start!";
    }

    /* ♾️♾️♾️♾️Theme Color♾️♾️♾️♾️ */
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        darkTheme();
    } else {
        blueTheme();
    }
    
    /* 🌴🌴🌴🌴Objects🌴🌴🌴🌴 */
    const enableObject = localStorage.getItem('objects');
    if(enableObject === 'disabled') {
        disable();
    } else {
        enable();
    }

    /* 🏞️🏞️🏞️🏞️Background Speed🏞️🏞️🏞️🏞️ */
    const backSpeed = localStorage.getItem('speed');
    if(backSpeed === 'slow') {
        lower();
    } else {
        normal();
    }

    /* 🖼️🖼️🖼️🖼️Pre-loading images🖼️🖼️🖼️🖼️ */
    var imageUrls = ['sprites/Object1.png', 'sprites/Object2.png', 'sprites/Object3.gif', 'sprites/Object4.gif', 
    'sprites/Object5.gif', 'sprites/Object6.png', 'sprites/Object7.gif', 'sprites/Object8.gif', 'sprites/badnik1.gif', 
    'sprites/badnik2.gif', "sprites/ground.png", "sprites/background.gif", 'images/sonic.ico', 
    'images/Sonic_Runners_logo.png', "sprites/score.png", "images/footer-bg.gif", "images/header.png", 
    'sprites/0.png', 'sprites/1.png', 'sprites/2.png', 'sprites/3.png', 'images/sega-dark.png', 
    'images/footer-bg-dark.gif', 'images/header-dark.jpg', "sprites/gameover.png", "sprites/gameover-sonic.gif", 
    "images/charselect.png", "images/charselect-dark.png", 'images/select-a-character.png', 'images/coming.png', 
    'images/stage-select.png'];
    var images = [];
    for (var i = 0; i < imageUrls.length; i++) {
        var img = new Image();
        img.src = imageUrls[i];
        images.push(img);
    }

    /* 🎶🎶🎶🎶Music🎶🎶🎶🎶 */
    /* 📋📋📋📋Menu Music📋📋📋📋 */
    if (storedIndex !== null) {
        musicIndex = parseInt(storedIndex);
        var music = Menu;
        music.src = musicList[musicIndex];
        music.loop = true;
        music.play();
    } else {
        Menu = new Audio('audios/Extras Menu - Sonic Mega Collection [OST].mp3');
        Menu.volume = 0.7;
        Menu.loop = true;
        Menu.play();
    }

    /* 🎮🎮🎮🎮Game Music🎮🎮🎮🎮 */
    if (storedGameIndex !== null) {
        gameMusicIndex = parseInt(storedGameIndex);
        var gameMusic = Game;
        gameMusic.src = gameMusicList[gameMusicIndex];
        gameMusic.loop = true;
    } else {
        Game = new Audio('audios/Green Hill (Modern) - Sonic Generations [OST].mp3');
        Game.volume = 0.5;
    }

    /* 👾👾👾👾Game Over Music👾👾👾👾 */
    if (storedGameOverIndex !== null) {
        gameoverMusicIndex = parseInt(storedGameOverIndex);
        var gameoverMusic = GameOver;
        gameoverMusic.src = gameoverMusicList[gameoverMusicIndex];
        gameoverMusic.loop = true;
    } else {
        GameOver = new Audio('audios/Sonic Advance 1 2 and 3-Game Over.mp3');
        GameOver.volume = 0.6;
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