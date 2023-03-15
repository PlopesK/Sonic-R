/* 👾👾👾👾Enemy👾👾👾👾 */
function enemy() {
  const obstacle1 = document.getElementById("badnik1");
  const obstacle2 = document.getElementById("badnik2");
  const background = document.getElementById("background");

  function moveObstacle1() {
    obstacle1.style.backgroundImage = "url(sprites/badnik1.gif)";
    obstacle1.style.transform = "translateX(100%)";
    const duration1 = 3000;
    const distance1 = obstacle1.offsetWidth + background.offsetWidth;
    const speed1 = distance1 / duration1;
    const startTime1 = performance.now();
    requestAnimationFrame(function animateObstacle1(time) {
      const elapsedTime1 = time - startTime1;
      const distanceCovered1 = elapsedTime1 * speed1; 
      obstacle1.style.transform = `translateX(calc(100% - ${distanceCovered1}px))`;
      if (distanceCovered1 < distance1) {
        requestAnimationFrame(animateObstacle1);
      } else {
        obstacle1.style.backgroundImage = "";
        setTimeout(moveObstacle1, Math.floor(Math.random() * 2000) + 4000);
      }
    });
  }

  function moveObstacle2() {
    obstacle2.style.backgroundImage = "url(sprites/badnik2.gif)";
    obstacle2.style.transform = "translateX(100%)";
    obstacle2.style.top = "20px";
    const duration2 = 3000;
    const distance2 = obstacle2.offsetWidth + background.offsetWidth;
    const speed2 = distance2 / duration2;
    const startTime2 = performance.now(); 
    requestAnimationFrame(function animateObstacle2(time) {
      const elapsedTime2 = time - startTime2;
      const distanceCovered2 = elapsedTime2 * speed2;
      obstacle2.style.transform = `translateX(calc(100% - ${distanceCovered2}px))`;
      if (distanceCovered2 < distance2) {
        requestAnimationFrame(animateObstacle2); 
      } else {
        obstacle2.style.backgroundImage = "";
        setTimeout(moveObstacle2, Math.floor(Math.random() * 5000) + 6000);
      }
    });
  }

  setTimeout(moveObstacle1, Math.floor(Math.random() * 2000) + 4000);
  setTimeout(moveObstacle2, Math.floor(Math.random() * 5000) + 6000)
}