function enemy(){ 
  const obstacle1 = document.getElementById("badnik1");
  const obstacle2 = document.getElementById("badnik2");
  badnik1();

  function badnik1(){
    obstacle1.classList.add("block");
    obstacle1.style.backgroundImage = "url(sprites/badnik1.gif)";

    obstacle1.addEventListener('animationend', () => {
      setTimeout(function () {
        obstacle1.style.backgroundImage = "url(sprites/badnik1.gif)";
        const minDuration1 = 1500;
        const maxDuration1 = 2500;
        const randomDuration1 = Math.floor(Math.random() * (maxDuration1 - minDuration1 + 1)) + minDuration1;
        const animationDuration1 = `${randomDuration1 / 1000}s`;
  
        obstacle1.style.animationDuration = animationDuration1;
        obstacle1.classList.remove('block');
        void obstacle1.offsetWidth;
        obstacle1.classList.add('block');
      }, 3000);
      obstacle1.style.backgroundImage = "";
    });
  }

  function badnik2() {
    obstacle2.addEventListener('animationend', () => {
      setTimeout(function () {
        obstacle2.classList.add("block");
        obstacle2.style.backgroundImage = "url(sprites/badnik2.gif)";
        obstacle2.style.top = '20px';
        const minDuration2 = 3000;
        const maxDuration2 = 5000;
        const randomDuration2 = Math.floor(Math.random() * (maxDuration2 - minDuration2 + 1)) + minDuration2;
        const animationDuration2 = `${randomDuration2 / 1000}s`;
  
        obstacle2.style.animationDuration = animationDuration2;
        obstacle2.classList.remove('block');
        void obstacle2.offsetWidth;
        obstacle2.classList.add('block');
      }, 11000);
      obstacle2.style.backgroundImage = "";
    });
  }

  let start = setTimeout(function() {
    obstacle2.classList.add("block");
    obstacle2.style.top = '-100px';
    badnik2();

    clearTimeout(start);
  }, 2000);
}