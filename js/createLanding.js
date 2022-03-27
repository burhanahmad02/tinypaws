
/**
 * Summary. This will be called when we want to pre-initiate the game, this will only be called once.
 *
 * Description. This function creates all the required elements before we can start building the different views of the game
 *              This function does not return anything and requires no parameters
 *                    startGame();.
 *
 */
function startGame() {

  /*CREATE SOUNDS*/
  //create the background sound
    var bgMusic = createSound("bg", "sounds/Whimsical-Popsicle.mp3", false, true);
  //the background sound will play on loop
    bgMusic.loop = true;

  //create the success sound
  var successSound = createSound("success", "sounds/428156__higgs01__yay.wav", true, false);
  //create the click sound
  var clickSound = createSound("click", "sounds/239523__cmdrobot__computer-beep-sfx-for-videogames.wav", true, false);
  //create the select sound
  var selectSound = createSound("select", "sounds/463202__gamer127__one-beep.wav", true, false);
  //create the drop sound
  var dropSound = createSound("drop", "sounds/330052__paulmorek__beep-05-positive.wav", true, false);

  //add all the sounds to the main body
  document.body.appendChild(bgMusic);
  document.body.appendChild(successSound);
  document.body.appendChild(clickSound);
  document.body.appendChild(selectSound);
  document.body.appendChild(dropSound);

  /*CREATE SETTINGS MENU*/
  //create the div to contain the entire menu
  var settings = createDiv("settings");

  //create the div to contain the menu items
  var settingsDetails = createDiv("setting-details", "is-inactive");

  //the first menu item will be the information icon
  var legalInfo = createImg("images/info.png");
  //handle how the click on the music icon will be handled
  //createLegalSection() in createLegal.js
  legalInfo.addEventListener("click", createLegalSection);

  //the second menu item will be the music icon
  var musicToggle = createImg("images/music-player.png");
  //handle how the click on the music icon will be handled
  //toggleMusic() in basicFunctionality.js
  musicToggle.addEventListener("click", toggleMusic);

  //the third menu item will be the speaker icon
  var soundToggle = createImg("images/speaker.png");
  //handle how the click on the speaker icon will be handled
  //toggleSounds() in basicFunctionality.js
  soundToggle.addEventListener("click", toggleSounds);

  //add menu items to the div
  settingsDetails.appendChild(legalInfo);
  settingsDetails.appendChild(musicToggle);
  settingsDetails.appendChild(soundToggle);

  //add menu items div to the main menu
  settings.appendChild(settingsDetails);

  //create image to represent the main menu which will be the gear icon
  var gear = createImg("images/settings.png", "", "gear");
  //handle how the click on the gear icon will be handled
  //clickSettings() in basicFunctionality.js
  gear.addEventListener("click", clickSettings);

  //add gear icon to the main menu
  settings.appendChild(gear);

  //add main menu to the body
  document.body.appendChild(settings);

  /*CREATE GAME DIV*/

  //create a div "game" to the body
  //this is where all the game elements will be populated
  var game = createDiv("game");
  document.body.appendChild(game);

  //load the landing page
  loadLanding();

  /*window.currentLevel = "Level-7";
  loadLevel();*/
}


function loadLanding() {
  //set the class for the body, this handles the background image
  document.body.className = "landing-page";

  //empty the "game" div
  var game = document.getElementById("game");
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }

  //create a div to contain the start button
  //this will format to set the buttons in the bottom center of the page
  var div = createDiv("landing-buttons", "landing-buttons");

  //create the button and set the on click function
  var newButton = createButton("New Game", newGame);
  //add button to the div
  div.appendChild(newButton);

  //add the button div to the "game" div
  document.getElementById("game").appendChild(div);
}


function newGame() {
  //play the select sound once the new game button is clicked
  playSelectSound();
  //load the level selection page
  loadLevelSelectionPage();
}