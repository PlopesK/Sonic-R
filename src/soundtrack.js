/* ⚙️⚙️⚙️⚙️Settings⚙️⚙️⚙️⚙️ */
function openMenu() {
  const navbar = document.querySelector("#settings");
  const button = document.getElementById("play");
  button.classList.add("hidden");
  navbar.style.height = "50%";
  navbar.style.width = "25%";
  document.removeEventListener("keydown", wait);
  Select.play();

  navbar.addEventListener("click", () => {
    Return.play();
  })
}

/* ⚫⚫⚫⚫Dark/Blue Mode🔵🔵🔵🔵 */
function blueTheme() {
  const blue = document.querySelector('#Blue');
  const dark = document.querySelector('#Dark');
  localStorage.setItem('blue',true);
  localStorage.removeItem('dark', false);

  document.documentElement.style.setProperty('--SiteColor', '#257BE6');
  document.documentElement.style.setProperty('--Header', 'url(images/header.png)');
  document.documentElement.style.setProperty('--Footer', 'url(images/footer-bg.gif)');
  document.getElementById("SonicTeam").src="https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/sonic_team.png.webp";
  document.getElementById("SonicTeam").title="Sonic Team";
  document.getElementById("SEGA").src="https://www.sonicthehedgehog.com/wp-content/uploads/2021/08/Sega_Logo-WHT-R.png.webp";
  dark.innerHTML="Dark Mode";
  blue.innerHTML="Blue Mode - Active";
}

function darkTheme() {
  const blue = document.querySelector('#Blue');
  const dark = document.querySelector('#Dark');
  localStorage.setItem('dark',true);
  localStorage.removeItem('blue', false);

  document.documentElement.style.setProperty('--SiteColor', '#252525');
  document.documentElement.style.setProperty('--Header', 'url(images/header-dark.jpg)');
  document.documentElement.style.setProperty('--Footer', 'url(images/footer-bg-dark.gif)');
  document.getElementById("SonicTeam").src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b7997c1-7e9b-4257-8243-4d9acf4cbd0a/d4kn36i-2fe1b899-9e11-4cef-be8c-0a884b9d4621.png/v1/fill/w_1280,h_416,strp/__team_shadow_logo___by_kaiser_art_d4kn36i-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDE2IiwicGF0aCI6IlwvZlwvM2I3OTk3YzEtN2U5Yi00MjU3LTgyNDMtNGQ5YWNmNGNiZDBhXC9kNGtuMzZpLTJmZTFiODk5LTllMTEtNGNlZi1iZThjLTBhODg0YjlkNDYyMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.NZDxbeGOENEkB2XpR1Gd_083vm9U3UAYxWemPgnjpgo";
  document.getElementById("SonicTeam").title="Art by: kaiser-art"
  document.getElementById("SEGA").src="images/sega-dark.png";
  dark.innerHTML="Dark Mode - Active";
  blue.innerHTML="Blue Mode";
}

/* Mute Music */
function muteMusic() {
  const muted = document.querySelector('#muteMusic');
  localStorage.setItem('muted',true);
  localStorage.removeItem('unmuted', false);

  muted.innerHTML = 'Mute Music <i class="fa fa-times"></i>'
  Menu.muted = true;
  GameOver.muted = true;
  GreenHill.muted = true;

  muted.addEventListener("click", unmuteMusic, { once: true });
}

function unmuteMusic() {
  const muted = document.querySelector('#muteMusic');
  localStorage.setItem('unmuted',true);
  localStorage.removeItem('muted', false);

  muted.innerHTML = 'Mute Music'
  Menu.muted = false;
  GameOver.muted = false;
  GreenHill.muted = false;

  muted.addEventListener("click", muteMusic, { once: true });
}

/* Mute Sounds */
function muteSound() {
  const muted = document.querySelector('#muteSound');
  localStorage.setItem('mutedSound',true);
  localStorage.removeItem('unmutedSound', false);

  muted.innerHTML = 'Mute SoundEffects <i class="fa fa-times"></i>'
  Select.muted = true;
  Return.muted = true;
  Jump.muted = true;
  StartTrack.muted = true;
  ScoreHit.muted = true;
  HigherScoreHit.muted = true;
  HitDamage.muted = true;
  SonicR.muted = true;
  SEGA.muted = true;
  SonicTeam.muted = true;

  muted.addEventListener("click", unmuteSound, { once: true });
}

function unmuteSound() {
  const muted = document.querySelector('#muteSound');
  localStorage.setItem('unmutedSound',true);
  localStorage.removeItem('mutedSound', false);

  muted.innerHTML = 'Mute SoundEffects'
  Select.muted = false;
  Return.muted = false;
  Jump.muted = false;
  StartTrack.muted = false;
  ScoreHit.muted = false;
  HigherScoreHit.muted = false;
  HitDamage.muted = false;
  SonicR.muted = false;
  SEGA.muted = false;
  SonicTeam.muted = false;

  muted.addEventListener("click", muteSound, { once: true });
}

/* ⚙️⚙️⚙️⚙️Close Settings⚙️⚙️⚙️⚙️ */
function closeBtn() {
    document.addEventListener("keydown", wait,  { once: true });

    const button = document.getElementById("play");
    button.classList.remove("hidden");

    const navbar = document.querySelector("#settings");
    navbar.style.width = "0";
    navbar.style.height = "0";
    Return.play();
}

/* 🎶🎶🎶🎶Musics🎶🎶🎶🎶 */
var Menu = new Audio('audios/Extras Menu - Sonic Mega Collection [OST].mp3');
Menu.volume = 0.4;

var GameOver = new Audio('audios/Sonic Advance 1 2 and 3-Game Over.mp3');
GameOver.volume = 0.4;

var GreenHill = new Audio('audios/Green Hill (Modern) - Sonic Generations [OST].mp3');
GreenHill.volume = 0.3;


/* 🔊🔊🔊🔊Sound-Effects🔊🔊🔊🔊 */
var Select = new Audio('audios/Sonic Heroes Select Sound.mp3');
Select.volume = 0.8;

var Return = new Audio('audios/Sonic Mega Collection - Game Unlocked (Sound Effect).mp3');
Return.volume = 1;

var Jump = new Audio('audios/Sonic Jump Sound Effect.mp3');
Jump.volume = 1;

var StartTrack = new Audio('audios/Sonic Checkpoint SFX.mp3');
StartTrack.volume = 1;

var ScoreHit = new Audio('audios/Sonic the Hedgehog Cha Ching Sound Effect.mp3');
ScoreHit.volume = 0.8;

var HigherScoreHit = new Audio('audios/Chaos emerald sound effect.mp3');
HigherScoreHit.volume = 0.8;

var HitDamage = new Audio('audios/Sonic Getting Hit (Sound Effect).mp3');
HitDamage.volume = 0.5;


/* 🦔🦔🦔🦔Logos🦔🦔🦔🦔 */
var SonicR = new Audio('audios/Sonic Feeling Good (Jason Griffith) sound effect (1080p 60fps).mp3');
SonicR.volume = 1;

var SEGA = new Audio('audios/Sega Intro.mp3');
SEGA.volume = 1;

var SonicTeam = new Audio('audios/Sega Saturn Sonic Team logo.mp3');
SonicTeam.volume = 1;