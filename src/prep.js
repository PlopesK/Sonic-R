/* Loading */
window.addEventListener("load", function (event) {
    var load = document.getElementById("load");
    var loadEffect = setInterval(function () {
        if (!load.style.opacity) {
            load.style.opacity = 1;
        }
        if (load.style.opacity > 0) {
            load.style.opacity -= 0.3;
        } else {
            clearInterval(loadEffect);
        }
    }, 200);
});

/* start */
function start() {
    const button = document.getElementById("play");
    const background = document.getElementById("background");
    const ground = document.getElementById("ground");
    button.classList.add("click");
    obstacle.classList.add("block");
    background.classList.add("background");
    ground.classList.add("move");
    game ();
}