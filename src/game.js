/* Game */
function game() {
    const sonic = document.getElementById("sonic");
    const obstacle = document.getElementById("obstacle");

    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            
            setTimeout(function () {
                sonic.classList.remove("jump");
            }, 400);
        }   
    }

    let isAlive = setInterval(function () {
        let sonicTop = parseInt(
            window.getComputedStyle(sonic).getPropertyValue("top"));

        let obstLeft = parseInt(
            window.getComputedStyle(obstacle).getPropertyValue("left"));

        if (obstLeft < 40 && obstLeft > 0 && sonicTop >= 140) {
            alert("Game Over!");
            location.reload()
        }
    }, 10);

    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function (event) {
            jump();
        });
    });
}