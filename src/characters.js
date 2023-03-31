window.addEventListener("DOMContentLoaded", function (event) {
    /* Characters */
    const selectedCharacter = localStorage.getItem('characters');
    if(selectedCharacter === 'Sonic' || selectedCharacter == null) {
        Sonic();
    } if (selectedCharacter === 'ClassicSonic') {
        ClassicSonic();
    } else {
        MetalSonic();
    }

    /* 🖼️🖼️🖼️🖼️Pre-loading images🖼️🖼️🖼️🖼️ */
    var charURL = ['sprites/sonic-idle.gif', "sprites/sonic-start.gif", "sprites/sonic-run.gif", 
    "sprites/sonic-jump.gif", 'sprites/sonic-damage.gif', 'sprites/sonic-death.gif', 'sprites/life-icon,.gif',
    "sprites/ClassicSonic/sonic3-idle.gif", 'sprites/ClassicSonic/sonic3-start.gif', 'sprites/ClassicSonic/sonic3-run.gif',
    'sprites/ClassicSonic/sonic3-jump.gif', 'sprites/ClassicSonic/sonic3-doublejump.gif', 'sprites/ClassicSonic/sonic3-damage.gif',
    'sprites/ClassicSonic/sonic3-death.gif'];
    var images = [];
    for (var i = 0; i < charURL.length; i++) {
        var img = new Image();
        img.src = charURL[i];
        images.push(img);
    }
});

function ClassicSonic() {
    localStorage.setItem('characters', 'ClassicSonic');

    document.documentElement.style.setProperty('--Idle', 'url(sprites/ClassicSonic/sonic3-idle.gif)');
    document.documentElement.style.setProperty('--Start', 'url(sprites/ClassicSonic/sonic3-start.gif)');
    document.documentElement.style.setProperty('--Run', 'url(sprites/ClassicSonic/sonic3-run.gif)');
    document.documentElement.style.setProperty('--Jump', 'url(sprites/ClassicSonic/sonic3-jump.gif)');
    document.documentElement.style.setProperty('--DoubleJump', 'url(sprites/ClassicSonic/sonic3-doublejump.gif)');
    document.documentElement.style.setProperty('--Damage', 'url(sprites/ClassicSonic/sonic3-damage.gif)');
    document.documentElement.style.setProperty('--Death', 'url(sprites/ClassicSonic/sonic3-death.gif)');
    document.getElementById("life-icon").src="sprites/ClassicSonic/sonic3-life.gif";
}

function Sonic() {
    localStorage.setItem('characters', 'Sonic');

    document.documentElement.style.setProperty('--Idle', 'url(sprites/sonic-idle.gif)');
    document.documentElement.style.setProperty('--Start', 'url(sprites/sonic-start.gif)');
    document.documentElement.style.setProperty('--Run', 'url(sprites/sonic-run.gif)');
    document.documentElement.style.setProperty('--Jump', 'url(sprites/sonic-jump.gif)');
    document.documentElement.style.setProperty('--DoubleJump', 'url(sprites/sonic-doublejump.gif)');
    document.documentElement.style.setProperty('--Damage', 'url(sprites/sonic-damage.gif)');
    document.documentElement.style.setProperty('--Death', 'url(sprites/sonic-death.gif)');
    document.getElementById("life-icon").src="sprites/life-icon.gif";
}

function MetalSonic() {
    localStorage.setItem('characters', 'MetalSonic');

    document.documentElement.style.setProperty('--Idle', 'url(sprites/MetalSonic/metalsonic-idle.gif)');
    document.documentElement.style.setProperty('--Start', 'url(sprites/MetalSonic/metalsonic-start.gif)');
    document.documentElement.style.setProperty('--Run', 'url(sprites/MetalSonic/metalsonic-run.gif)');
    document.documentElement.style.setProperty('--Jump', 'url(sprites/MetalSonic/metalsonic-jump.gif)');
    document.documentElement.style.setProperty('--DoubleJump', 'url(sprites/MetalSonic/metalsonic-doublejump.gif)');
    document.documentElement.style.setProperty('--Damage', 'url(sprites/MetalSonic/metalsonic-damage.gif)');
    document.documentElement.style.setProperty('--Death', 'url(sprites/MetalSonic/metalsonic-death.gif)');
    document.getElementById("life-icon").src="sprites/MetalSonic/metalsonic-life.gif";
}