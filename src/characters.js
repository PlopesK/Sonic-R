window.addEventListener("DOMContentLoaded", function (event) {
    /* 🌀🌀🌀🌀Characters🌀🌀🌀🌀 */
    const selectedCharacter = localStorage.getItem('characters');
    if(selectedCharacter === 'Sonic' || selectedCharacter == null) {
        Sonic();
    } if (selectedCharacter === 'ClassicSonic') {
        ClassicSonic();
    } if (selectedCharacter === 'MetalSonic') {
        MetalSonic();
    } if (selectedCharacter === 'Shadow') {
        Shadow();
    } if (selectedCharacter === 'Amy') {
        Amy();
    }

    /* 🖼️🖼️🖼️🖼️Pre-loading Characters🖼️🖼️🖼️🖼️ */
    var charURL = ['sprites/sonic-idle.gif', "sprites/sonic-start.gif", "sprites/sonic-run.gif", 
    "sprites/sonic-jump.gif", 'sprites/sonic-damage.gif', 'sprites/sonic-death.gif', 'sprites/life-icon,.gif',
    "sprites/ClassicSonic/sonic3-idle.gif", 'sprites/ClassicSonic/sonic3-start.gif', 'sprites/ClassicSonic/sonic3-run.gif',
    'sprites/ClassicSonic/sonic3-jump.gif', 'sprites/ClassicSonic/sonic3-doublejump.gif', 'sprites/ClassicSonic/sonic3-damage.gif',
    'sprites/ClassicSonic/sonic3-death.gif', 
    'sprites/MetalSonic/metalsonic-idle.gif', 'sprites/MetalSonic/metalsonic-start.gif', 
    'sprites/MetalSonic/metalsonic-run.gif', 'sprites/MetalSonic/metalsonic-jump.gif', 'sprites/MetalSonic/metalsonic-doublejump.gif', 
    'sprites/MetalSonic/metalsonic-damage.gif', 'sprites/MetalSonic/metalsonic-death.gif', 'sprites/MetalSonic/metalsonic-life.gif',
    'sprites/Shadow/shadow-idle.gif', 'sprites/Shadow/shadow-start.gif', 'sprites/Shadow/shadow-run.gif', 
    'sprites/Shadow/shadow-jump.gif', 'sprites/Shadow/shadow-doublejump.gif', 'sprites/Shadow/shadow-damage.gif', 
    'sprites/Shadow/shadow-death.gif', 'sprites/Shadow/shadow-life.gif', 
    'sprites/Amy/amy-idle.gif', 'sprites/Amy/amy-start.gif', 'sprites/Amy/amy-run.gif', 'sprites/Amy/amy-jump.gif', 
    'sprites/Amy/amy-doublejump.gif', 'sprites/Amy/amy-damage.gif', 'sprites/Amy/amy-death.gif', 'sprites/Amy/amy-life.gif'];
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
    document.getElementById("charName").innerText= 'Classic Sonic';
    document.getElementById("extraInfo").innerText= 'Sonic the Hedgehog 3 (& Knuckles)';
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
    document.getElementById("charName").innerText= 'Sonic';
    document.getElementById("extraInfo").innerText= 'Sonic Advance 1, 2, 3 and Sonic Battle';
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
    document.getElementById("charName").innerText= 'Metal Sonic';
    document.getElementById("extraInfo").innerHTML= 'Sonic CD and <a href="https://info.sonicretro.org/Metal_Sonic_in_Sonic_the_Hedgehog_2">Sonic 2 (HackRoom)</a>';
}

function Shadow() {
    localStorage.setItem('characters', 'Shadow');

    document.documentElement.style.setProperty('--Idle', 'url(sprites/Shadow/shadow-idle.gif)');
    document.documentElement.style.setProperty('--Start', 'url(sprites/Shadow/shadow-start.gif)');
    document.documentElement.style.setProperty('--Run', 'url(sprites/Shadow/shadow-run.gif)');
    document.documentElement.style.setProperty('--Jump', 'url(sprites/Shadow/shadow-jump.gif)');
    document.documentElement.style.setProperty('--DoubleJump', 'url(sprites/Shadow/shadow-doublejump.gif)');
    document.documentElement.style.setProperty('--Damage', 'url(sprites/Shadow/shadow-damage.gif)');
    document.documentElement.style.setProperty('--Death', 'url(sprites/Shadow/shadow-death.gif)');
    document.getElementById("life-icon").src="sprites/Shadow/shadow-life.gif";
    document.getElementById("charName").innerText= 'Shadow';
    document.getElementById("extraInfo").innerText= 'Sonic Battle';
}

function Amy() {
    localStorage.setItem('characters', 'Amy');

    document.documentElement.style.setProperty('--Idle', 'url(sprites/Amy/amy-idle.gif)');
    document.documentElement.style.setProperty('--Start', 'url(sprites/Amy/amy-start.gif)');
    document.documentElement.style.setProperty('--Run', 'url(sprites/Amy/amy-run.gif)');
    document.documentElement.style.setProperty('--Jump', 'url(sprites/Amy/amy-jump.gif)');
    document.documentElement.style.setProperty('--DoubleJump', 'url(sprites/Amy/amy-doublejump.gif)');
    document.documentElement.style.setProperty('--Damage', 'url(sprites/Amy/amy-damage.gif)');
    document.documentElement.style.setProperty('--Death', 'url(sprites/Amy/amy-death.gif)');
    document.getElementById("life-icon").src="sprites/Amy/amy-life.gif";
    document.getElementById("charName").innerText= 'Amy';
    document.getElementById("extraInfo").innerText= 'Sonic Advance 1, 2, 3 and Sonic Battle';
}

function ComingSoon() {
    document.getElementById("charName").innerText= 'Coming Soon';
    document.getElementById("extraInfo").innerText= 'Wait till it is ready!';
}