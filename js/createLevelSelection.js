/*This file contains the functions associated with the level selection page*/

function loadLevelSelectionPage() {
  //set the class for the body, this handles the background image
  document.body.className = "level-select-page";


  if (document.getElementById("setting-details").childElementCount > 3) {
    //update the class of the menu items (this changes the height of the div to match the number of menu items inside the div)
    document.getElementById("setting-details").classList.toggle("in-level");

    //remove the last two menu items
    document.getElementById("setting-details").removeChild(document.getElementById("setting-details").childNodes[2]);
    document.getElementById("setting-details").removeChild(document.getElementById("setting-details").childNodes[2]);
  }

  //empty the "game" div
  var game = document.getElementById("game");
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }

  //create a div to set all the available levels
  var allLevels = createDiv("levels", "levels");

  //loop on all the available levels
  for (let levelCount in window.userScore) {
    //get level info of this particular level
    let levelInfo = window.userScore[levelCount];

    //create a div to contain information about this level
    let level = createDiv(levelInfo['level'], "single-level");

    //check if the level is unlocked
    if (levelInfo['unlocked']) {
      //if the level is unlocked we allow the player to start the level when he clicks on the div
      level.onclick = function() {
        //play the select sound when the user clicks on the div
        playSelectSound();

        //set the level to be loaded from the level info
        window.currentLevel = levelInfo['level'];
        //load the level
        loadLevel();
      };
    } else {
      //if the level is unlocked we add a CSS class to set the view of the div to match that
      level.classList.add("locked");
    }

    //set the level number in a paragraph
    let para = createParagraph(levelInfo['level'], levelInfo['number']);
    //add level number paragraph to the div
    level.appendChild(para);
    //add the score of the player for this level to the div
    level.appendChild(scoreStars(levelInfo['score']));

    //add the div of details of this one level to the div containing all the levels
    allLevels.appendChild(level);
  }

  //add div containing information of all the levels to the "game" div
  document.getElementById("game").appendChild(allLevels);
}