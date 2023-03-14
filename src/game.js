/* 🎮🎮🎮🎮Game🎮🎮🎮🎮 */
function game() {
    const sonic = document.getElementById("sonic");
    const obstacle = document.getElementsByClassName('obstacle');

    function jump() {
        if (sonic.classList != "jump") {
            sonic.classList.add("jump");
            
            setTimeout(function () {
                sonic.classList.remove("jump");
            }, 400);
        }   
    }

 

    ['keydown', 'click'].forEach(function(e) {
        document.addEventListener(e, function (event) {
            jump();
        });
    });
    
}