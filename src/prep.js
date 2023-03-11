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
            load.classList.remove("active");
        }
    }, 200);
});

/* Start */
function start() {
    const button = document.getElementById("play");
    const background = document.getElementById("background");
    const ground = document.getElementById("ground");
    const sonic = document.getElementById("sonic");
    button.style.display = "none";
    sonic.classList.add("run");
    ground.classList.add("move");

    sonic.addEventListener("animationend", function () {
        sonic.classList.remove("run");
        sonic.style.backgroundImage = "url(sprites/sonic-run.gif)";
        obstacle.classList.add("block");
        background.classList.add("background");
        game ();
    });
}