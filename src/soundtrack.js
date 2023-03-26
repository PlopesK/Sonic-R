/* ⚙️⚙️⚙️⚙️Settings⚙️⚙️⚙️⚙️ */
function openMenu() {
  const navbar = document.querySelector("#settings");
  const button = document.getElementById("play");
  button.classList.add("hidden");
  navbar.style.height = "50%";
  navbar.style.width = "40vh";
  document.removeEventListener("keydown", wait);
  Select.play();

  navbar.addEventListener("click", () => {
    Selected.play();
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

/* 🔇🔇🔇🔇Mute Music🔇🔇🔇🔇 */
function muteMusic() {
  const muted = document.querySelector('#muteMusic');
  localStorage.setItem('muted',true);
  localStorage.removeItem('unmuted', false);
  const musics = [Menu, GameOver, Game];

  muted.innerHTML = 'Mute Music <i class="fa fa-times"></i>'
  musics.forEach(function(e) {
    e.muted = true;
  });

  muted.addEventListener("click", unmuteMusic, { once: true });
}

function unmuteMusic() {
  const muted = document.querySelector('#muteMusic');
  localStorage.setItem('unmuted',true);
  localStorage.removeItem('muted', false);
  const musics = [Menu, GameOver, Game];

  muted.innerHTML = 'Mute Music'
  musics.forEach(function(e) {
    e.muted = false;
  });

  muted.addEventListener("click", muteMusic, { once: true });
}

/* 🔇🔇🔇🔇Mute Sounds🔇🔇🔇🔇 */
function muteSound() {
  const muted = document.querySelector('#muteSound');
  localStorage.setItem('mutedSound',true);
  localStorage.removeItem('unmutedSound', false);
  const sounds = [Select, Selected, Return, Jump, StartTrack, ScoreHit, HigherScoreHit, 
  HitDamage, SonicR, SEGA, SonicTeam];

  muted.innerHTML = 'Mute SoundEffects <i class="fa fa-times"></i>'
  sounds.forEach(function(e) {
    e.muted = true;
  });

  muted.addEventListener("click", unmuteSound, { once: true });
}

function unmuteSound() {
  const muted = document.querySelector('#muteSound');
  localStorage.setItem('unmutedSound',true);
  localStorage.removeItem('mutedSound', false);
  const sounds = [Select, Selected, Return, Jump, StartTrack, ScoreHit, HigherScoreHit, 
  HitDamage, SonicR, SEGA, SonicTeam];

  muted.innerHTML = 'Mute SoundEffects'
  sounds.forEach(function(e) {
    e.muted = false;
  });

  muted.addEventListener("click", muteSound, { once: true });
}

/* ✅✅✅✅Select Music✅✅✅✅ */
function openSelect() {
  const menuSelect = document.querySelector("#menuMusic");
  menuSelect.style.height = "50%";
}

/* 📋📋📋📋Menu Music📋📋📋📋 */
var musicIndex = 0;
var musicList = ['audios/Extras Menu - Sonic Mega Collection [OST].mp3', 
"audios/File Select - Sonic the Hedgehog 3 & Knuckles.mp3", "audios/Sonic Mega Collection Main Menu Theme.mp3", 
"audios/Chun-nan (Night) - Sonic Unleashed [OST].mp3", "audios/Options Screen - Sonic R [OST].mp3", 
"audios/A Ghost's Pumpkin Soup ... for Pumpkin Hill.mp3"];
function selectMusic(index) {
	var music = Menu;
	if (index >= 0 && index < musicList.length) {
		musicIndex = index;
		music.src = musicList[musicIndex];
    music.loop = true;
		music.play();
    Game.pause();
    GameOver.pause();
    localStorage.setItem("musicIndex", musicIndex);
	}
}
var storedIndex = localStorage.getItem("musicIndex");

/* 🎮🎮🎮🎮Game Music🎮🎮🎮🎮 */
var gameMusicIndex = 0;
var gameMusicList = ['audios/Green Hill (Modern) - Sonic Generations [OST].mp3', 
"audios/Live and Learn by Crush 40 (Main Theme of SA2).mp3", 
"audios/Escape From the City (City Escape) - Sonic Adventure 2 [OST].mp3", "audios/BOSS BATTLE BIG ARM.mp3", 
"audios/Crisis City - Sonic the Hedgehog [OST].mp3", "audios/Kick The Rock! (feat. Hunnid-P) - Wild Canyon Theme from Sonic Adventure 2.mp3", 
"audios/Undefeatable (feat. Kellin Quinn).mp3", "audios/Dragon Road (Day) - Sonic Unleashed [OST].mp3", 
"audios/Doomsday Zone - Sonic & Knuckles [OST].mp3", "audios/Vela-Nova - Sonic Rush [OST].mp3", 
"audios/Rooftop Run (Modern) - Sonic Generations [OST].mp3"];
function selectGameMusic(index) {
	var gameMusic = Game;
	if (index >= 0 && index < gameMusicList.length) {
		gameMusicIndex = index;
		gameMusic.src = gameMusicList[gameMusicIndex];
    gameMusic.loop = true;
    Menu.pause();
    GameOver.pause();
		gameMusic.play();
    localStorage.setItem("gameMusicIndex", gameMusicIndex);
	}
}
var storedGameIndex = localStorage.getItem("gameMusicIndex");

/* 👾👾👾👾Game Over Music👾👾👾👾 */
var gameoverMusicIndex = 0;
var gameoverMusicList = ['audios/Sonic Advance 1 2 and 3-Game Over.mp3', 
"audios/Sonic CD - Game Over Music ~ Japan.mp3", "audios/Sonic CD - Game Over Music ~ USA.mp3", 
"audios/Sonic 1 Music Game Over.mp3", "audios/Sonic 3 And Knuckles OST - Game Over.mp3", 
"audios/Sonic Rush Groove Rush 2 GAME OVER.mp3"];
function selectGameOverMusic(index) {
	var gameoverMusic = GameOver;
	if (index >= 0 && index < gameoverMusicList.length) {
		gameoverMusicIndex = index;
		gameoverMusic.src = gameoverMusicList[gameoverMusicIndex];
    gameoverMusic.loop = true;
		gameoverMusic.play();
    Game.pause();
    Menu.pause();
    localStorage.setItem("gameoverMusicIndex", gameoverMusicIndex);
	}
}
var storedGameOverIndex = localStorage.getItem("gameoverMusicIndex");

/* ⚙️⚙️⚙️⚙️Close Settings⚙️⚙️⚙️⚙️ */
function closeBtn() {
  Selected.currentTime = 3;
  document.addEventListener("keydown", wait,  { once: true });

  const button = document.getElementById("play");
  button.classList.remove("hidden");

  const navbar = document.querySelector("#settings");
  navbar.style.width = "0";
  navbar.style.height = "0";
  const menuSelect = document.querySelector("#menuMusic");
  menuSelect.style.height = "0";
  Return.play();
  Game.pause();
  GameOver.pause();
  Menu.play();
}

/* 🎶🎶🎶🎶Musics🎶🎶🎶🎶 */
var Menu = new Audio('audios/Extras Menu - Sonic Mega Collection [OST].mp3');
Menu.volume = 0.7;

var GameOver = new Audio('audios/Sonic Advance 1 2 and 3-Game Over.mp3');
GameOver.volume = 0.6;

var Game = new Audio('audios/Green Hill (Modern) - Sonic Generations [OST].mp3');
Game.volume = 0.5;


/* 🔊🔊🔊🔊Sound-Effects🔊🔊🔊🔊 */
var Select = new Audio('audios/Sonic Heroes Select Sound.mp3');
Select.volume = 0.8;

var Return = new Audio('audios/Sonic Mega Collection - Game Unlocked (Sound Effect).mp3');
Return.volume = 1;

var Selected = new Audio('audios/Sonic CD Original Sound Track - Event.mp3');
Selected.volume = 0.6;

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