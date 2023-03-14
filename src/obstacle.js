function enemy(){ 
  const obstacle1 = document.getElementById("badnik1");
  const obstacle2 = document.getElementById("badnik2");

  obstacle1.classList.add('block');
  obstacle2.classList.add('block');

  obstacle1.addEventListener('animationend', () => {
    setTimeout(function () {
      obstacle1.style.backgroundImage = "url(sprites/badnik1.gif)";
      const minDuration1 = 1500;
      const maxDuration1 = 3000;
      const randomDuration1 = Math.floor(Math.random() * (maxDuration1 - minDuration1 + 1)) + minDuration1;
      const animationDuration1 = `${randomDuration1 / 1000}s`;

      obstacle1.style.animationDuration = animationDuration1;
      obstacle1.classList.remove('block');
      void obstacle1.offsetWidth;
      obstacle1.classList.add('block');
    }, 2000);
    obstacle1.style.backgroundImage = "";
  });

  obstacle2.addEventListener('animationend', () => {
    setTimeout(function () {
      obstacle2.style.backgroundImage = "url(sprites/badnik2.gif)";
      const minDuration2 = 1000;
      const maxDuration2 = 4000;
      const randomDuration2 = Math.floor(Math.random() * (maxDuration2 - minDuration2 + 1)) + minDuration2;
      const animationDuration2 = `${randomDuration2 / 1000}s`;

      obstacle2.style.animationDuration = animationDuration2;
      obstacle2.classList.remove('block');
      void obstacle2.offsetWidth;
      obstacle2.classList.add('block');
    }, 10000);
    obstacle2.style.backgroundImage = "";
  });
}