function enemy() {
  const obstacle = document.getElementById("obstacle");
  obstacle.classList.add('block');

  obstacle.addEventListener('animationend', () => {
    const minDuration = 1500;
    const maxDuration = 3000;
    const randomDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
    const animationDuration = `${randomDuration / 1000}s`;

    obstacle.style.animationDuration = animationDuration;
    
    obstacle.classList.remove('block');
    void obstacle.offsetWidth;
    obstacle.classList.add('block');
  });
}