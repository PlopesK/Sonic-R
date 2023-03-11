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
    var start = setInterval ( function () {
        button.classList.add("click");
        sonic.style.backgroundImage = "url(sprites/sonic-start.gif)";
        sonic.classList.add("run");
        sonic.addEventListener("animationend", function () {
            clearInterval(start);
            sonic.style.backgroundImage = "url(sprites/sonic-run.gif)";
            obstacle.classList.add("block");
            background.classList.add("background");
            ground.classList.add("move");
            game ();
        })
    });
}