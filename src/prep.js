/* Loading */
window.addEventListener("load", function (event) {
    console.log ("loaded");
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