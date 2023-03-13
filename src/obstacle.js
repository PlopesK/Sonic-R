function enemy() {
    let blockDuration = 3;
    const obstacle = document.getElementById("obstacle");
  
    function updateBlockDuration() {
      blockDuration -= 0.2;
      if (blockDuration < 1) {
        blockDuration = 1;
      }
      obstacle.style.animationDuration = `${blockDuration}s`;
      console.log(`Block animation duration set to ${blockDuration}s`);
    }
  
    function update() {
      updateBlockDuration();
    }
  
    setInterval(update, 1000);
  }