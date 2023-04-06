/* ⚙️⚙️⚙️⚙️Settings⚙️⚙️⚙️⚙️ */
function openMenu() {
    const navbar = document.querySelector("#settings");
    const button = document.getElementById("play");
    button.classList.add("hidden");
    navbar.style.height = "50%";
    if (( window.innerWidth <= 800 )){
      navbar.style.width = "50%";
    } else {
      navbar.style.width = "25%";
    }
    document.removeEventListener("keydown", wait);
    Select.play();
  
    navbar.addEventListener("click", () => {
      Selected.play();
    });
}
  
/* ⚫⚫⚫⚫Dark/Blue Mode🔵🔵🔵🔵 */
function blueTheme() {
    const blue = document.querySelector('#Blue');
    const dark = document.querySelector('#Dark');
    localStorage.setItem('theme', 'blue');
  
    document.documentElement.style.setProperty('--SiteColor', '#257BE6');
    document.documentElement.style.setProperty('--Header', 'url(images/header.png)');
    document.documentElement.style.setProperty('--Footer', 'url(images/footer-bg.gif)');
    document.documentElement.style.setProperty('--CharSelect', 'url(images/charselect.png)');
    document.documentElement.style.setProperty('--CharColor', '#0080d0');
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#257BE6');
    document.getElementById("SonicTeam").src="https://upload.wikimedia.org/wikipedia/pt/thumb/9/97/Sonic_Team_Logo.svg/1280px-Sonic_Team_Logo.svg.png";
    document.getElementById("SonicTeam").title="Sonic Team";
    document.getElementById("SEGA").src="https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/Sega_Logo-WHT-R.png.webp";
    dark.innerHTML="Dark Mode";
    blue.innerHTML="Blue Mode - Active";
  }
  
  function darkTheme() {
    const blue = document.querySelector('#Blue');
    const dark = document.querySelector('#Dark');
    localStorage.setItem('theme', 'dark');
  
    document.documentElement.style.setProperty('--SiteColor', '#252525');
    document.documentElement.style.setProperty('--Header', 'url(images/header-dark.jpg)');
    document.documentElement.style.setProperty('--Footer', 'url(images/footer-bg-dark.gif)');
    document.documentElement.style.setProperty('--CharSelect', 'url(images/charselect-dark.png)');
    document.documentElement.style.setProperty('--CharColor', '#001c2e');
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#252525');
    document.getElementById("SonicTeam").src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b7997c1-7e9b-4257-8243-4d9acf4cbd0a/d4kn36i-2fe1b899-9e11-4cef-be8c-0a884b9d4621.png/v1/fill/w_1280,h_416,strp/__team_shadow_logo___by_kaiser_art_d4kn36i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDE2IiwicGF0aCI6IlwvZlwvM2I3OTk3YzEtN2U5Yi00MjU3LTgyNDMtNGQ5YWNmNGNiZDBhXC9kNGtuMzZpLTJmZTFiODk5LTllMTEtNGNlZi1iZThjLTBhODg0YjlkNDYyMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NZDxbeGOENEkB2XpR1Gd_083vm9U3UAYxWemPgnjpgo";
    document.getElementById("SonicTeam").title="Art by: kaiser-art"
    document.getElementById("SEGA").src="images/sega-dark.png";
    dark.innerHTML="Dark Mode - Active";
    blue.innerHTML="Blue Mode";
  }

/* 🌴🌴🌴🌴Enable/Disable Background Objects🌴🌴🌴🌴 */
let showAlert = false;

function enable() {
  if (!Started) {
    localStorage.setItem('objects', 'enabled');
    const objects = document.querySelectorAll(".object");
    objects.forEach(element => {
      element.classList.remove("hidden");
    });
    const option = document.getElementById("enable-txt");
    option.innerText = 'Disable Background Objects';
    option.addEventListener("click", disable, { once: true });
  }
}

function disable() {
  if (!Started) {
    localStorage.setItem('objects', 'disabled');
    const objects = document.querySelectorAll(".object");
    objects.forEach(element => {
      element.classList.add("hidden");
    });
    const option = document.getElementById("enable-txt");
    option.innerText = 'Enable Background Objects';
    option.addEventListener("click", enable, { once: true });
  }
}

/* 🏞️🏞️🏞️🏞️Lower Speed of the Background🏞️🏞️🏞️🏞️ */
function lower() {
  if (!Started) {
    localStorage.setItem('speed', 'slow');
    slow = true;
    const message = document.getElementById("speed-txt");
    message.innerText = 'Normal Background Speed';
    message.addEventListener("click", normal, { once: true });
  }
}

function normal() {
  if (!Started) {
    localStorage.setItem('speed', 'normal');
    slow = false;
    const message = document.getElementById("speed-txt");
    message.innerText = 'Slow Background Speed';
    message.addEventListener("click", lower, { once: true });
  }
}

function check() {
  if (!Started) {
    return;
  } else {
    alert("You can't modify the game after it started! \nYou will take damage after this message is show :) \n[unless you're fast enough to avoid...]");
  }
}

/* ⚙️⚙️⚙️⚙️Close Settings⚙️⚙️⚙️⚙️ */
function closeBtn() {
    Selected.currentTime = 3;
    const button = document.getElementById("play");
    const navbar = document.querySelector("#settings");

    if (!Started) {
      document.addEventListener("keydown", wait,  { once: true });
      const button = document.getElementById("play");
      button.classList.remove("hidden");
    } else {
      document.removeEventListener("keydown", wait,  { once: true });
      button.classList.add("hidden");
    }

    navbar.style.width = "0";
    navbar.style.height = "0";
    const menuSelect = document.querySelector("#menuMusic");
    menuSelect.style.height = "0";
    Return.play();
    Game.pause();
    GameOver.pause();
    Menu.play();
  }

  /* 🌀🌀🌀🌀Open Character Select🌀🌀🌀🌀 */
  function openCharSelect() {
    const charSelect = document.querySelector("#charOpt");
    const characters = document.querySelectorAll(".option");
    charSelect.style.height = "70%";
    charSelect.style.width = "120vh";
    charSelect.style.border = '5px outset #0050a8';
    setTimeout(() => {
      characters.forEach(element => {
        element.classList.remove("hidden");
      });
    }, 400);
    Select.play();
  
    charSelect.addEventListener("click", () => {
      Selected.play();
    })
  }

  /* 🌀🌀🌀🌀Close🌀🌀🌀🌀 */
  function closeCharSelect() {
    const charSelect = document.querySelector("#charOpt");
    const characters = document.querySelectorAll(".option");
    charSelect.style.height = "0";
    charSelect.style.width = "0";
    charSelect.style.border = '0px outset #0050a8';
    characters.forEach(element => {
      element.classList.add("hidden");
    });
    Selected.currentTime = 3;
    Return.play();
  }

  /* 🗺️🗺️🗺️🗺️Stage Select Menu🗺️🗺️🗺️🗺️ */
  function Stage() {
    alert("Coming Soon!");
  }