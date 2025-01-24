// Função genérica para definir o personagem
function setCharacter(character, spriteFolder, name, extraInfo, lifeIcon = "life-icon.gif") {
    localStorage.setItem('characters', character);

    const spriteActions = ['Idle', 'Start', 'Run', 'Jump', 'DoubleJump', 'Damage', 'Death'];
    spriteActions.forEach(action => {
        document.documentElement.style.setProperty(
            `--${action}`, 
            `url(sprites/${spriteFolder}/${spriteFolder.toLowerCase()}-${action.toLowerCase()}.gif)`
        );
    });

    document.getElementById("life-icon").src = `sprites/${spriteFolder.toLowerCase()}/${lifeIcon}`;
    document.getElementById("charName").innerText = name;

    document.getElementById("extraInfo").innerHTML = extraInfo;
}

function ClassicSonic() {
    setCharacter(
        'ClassicSonic', 
        'ClassicSonic', 
        'Classic Sonic', 
        'Sonic the Hedgehog 3 (& Knuckles)', 
        'sonic3-life.gif'
    );
}

function Sonic() {
    setCharacter(
        'Sonic', 
        'Sonic', 
        'Sonic', 
        'Sonic Advance 1, 2, 3 and Sonic Battle',
        'life-icon.gif'
    );
}

function MetalSonic() {
    setCharacter(
        'MetalSonic', 
        'MetalSonic', 
        'Metal Sonic', 
        'Sonic CD and <a href="https://info.sonicretro.org/Metal_Sonic_in_Sonic_the_Hedgehog_2">Sonic 2 (HackRoom)</a>', 
        'metalsonic-life.gif'
    );
}

function Shadow() {
    setCharacter(
        'Shadow', 
        'Shadow', 
        'Shadow', 
        'Sonic Battle', 
        'shadow-life.gif'
    );
}

function Amy() {
    setCharacter(
        'Amy', 
        'Amy', 
        'Amy', 
        'Sonic Advance 1, 2, 3 and Sonic Battle', 
        'amy-life.gif'
    );
}

function ComingSoon() {
    document.getElementById("charName").innerText = 'Coming Soon';
    document.getElementById("extraInfo").innerText = 'Wait till it is ready!';
}

window.addEventListener("DOMContentLoaded", function () {
    const selectedCharacter = localStorage.getItem('characters');
    switch (selectedCharacter) {
        case 'ClassicSonic':
            ClassicSonic();
            break;
        case 'MetalSonic':
            MetalSonic();
            break;
        case 'Shadow':
            Shadow();
            break;
        case 'Amy':
            Amy();
            break;
        case 'Sonic':
        default:
            Sonic();
            break;
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
