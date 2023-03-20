/* 🎮🎮🎮🎮Game🎮🎮🎮🎮 */
function game() {
    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            
            setTimeout(function () {
                sonic.classList.remove("jump");
            }, 400);
        }   
    }
    
    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function () {
            jump();
        });
    });
}

function backgroundMove() {
    let lastTime = 0;
    let positionX = 0;
    let speed = 100;

    function animate(timestamp) {
        if (!lastTime) lastTime = timestamp;
        let elapsed = timestamp - lastTime;
        lastTime = timestamp;

        positionX -= ((speed * elapsed) / 1000);

        background.style.backgroundPositionX = positionX + 'px';

        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}