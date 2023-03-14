function enemy() {
  let count = 1;
  let animationDuration = '3s';
  const obstacle = document.getElementById("obstacle");
  obstacle.classList.add('block');

  obstacle.addEventListener('animationend', () => {
    count++;
    obstacle.style.animationDuration = animationDuration;
    
    if(count >= 2){
      animationDuration = '1.5s';
      obstacle.classList.remove('block');
      void obstacle.offsetWidth; 
      obstacle.classList.add('block');
    }
  });
}