/*This file contains all the functions required to build a level of the game*/

//this will contain the number of clicks in the gameplay of a level
var clickCount;
//this will contain the status of the level if it is completed or not
var complete;
//this will contain the dimensions of the puzzle slots
window.dimensions = "15vh";
//these are the butterflies for the background
var butterflies = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];


function loadLevel() {
  /*CREATE BASIC STRUCTURE*/
  //set the class for the body, this handles the background image
  document.body.className = "level-page";

  //this flag will be true when the level is completed
  complete = false;

  //restart the counter for counting the number of clicks when a level is first loaded
  clickCount = 0;


  if (document.getElementById("setting-details").childElementCount == 3) {

    //the first menu item will be the menu icon
      var menu = createImg("images/menu.png");

    menu.addEventListener("click", loadLevelSelectionPage);

    //the second menu item will be the repeat icon
    var reset = createImg("images/repeat.png");
    //handle how the click on the music icon will be handled
    //reloadLevel() in gamePlay.js
    reset.addEventListener("click", reloadLevel);

    //update the class of the menu items (this changes the height of the div to match the number of menu items inside the div)
    document.getElementById("setting-details").classList.toggle("in-level");

    //add menu items to the settings details div
    document.getElementById("setting-details").appendChild(menu);
    document.getElementById("setting-details").appendChild(reset);
  }

  //empty the "game" div
  var game = document.getElementById("game");
  while (game.firstChild) {
    game.removeChild(game.firstChild);
  }

  //create div for the pop up and the pop up content for when the game is completed
  var popUp = createDiv("pop-up");
  var popUpContent = createDiv("pop-up-content");
  popUp.appendChild(popUpContent);
  game.appendChild(popUp);

  //create div which will contain the level elements
  var level = createDiv("level");

  //create a div which will contain the puzzle and dock
  var playableSection = createDiv("playable-section");

  //create puzzle and dock and add it to the playable div
  var dockSection = createDiv("dock-section");
  var puzzleSection = createDiv("puzzle-section");
  playableSection.appendChild(dockSection);
  playableSection.appendChild(puzzleSection);

  //add playable div to the level div
  level.appendChild(playableSection);
  //add level div to the "game" div
  game.appendChild(level);

  /*CREATE THE PUZZLE*/
  //get the details of the current level
  window.levelInfo = window.gameLevels[window.currentLevel];

  //define the dimensions of the puzzle slots
  dimensions = 70 / Math.max(levelInfo['rows'], levelInfo['columns']) + "vmin";

  //create the table for the puzzle
  var table = createTable("puzzle");

  //loop on each row in the puzzle to create a new row in the table
  for (let rowCount = 0; rowCount < levelInfo['rows']; rowCount++) {
    //create a new row
    var row = document.createElement("TR");

    //loop on each column in the puzzle to create a new cell in the table
    for (let colCount = 0; colCount < levelInfo['columns']; colCount++) {
      
      let puzzleInfo = levelInfo["puzzle"][rowCount][colCount];

      //set ID of the cell
      let cellId = (rowCount + 1) + "-" + (colCount + 1);

      //create the slot and add it as a cell in the row
      // the slot will be create in the function createPuzzleSlot in levelElements.js
      row.appendChild(createPuzzleSlot(puzzleInfo, cellId));
    }
    //add the row to the puzzle table
    table.appendChild(row);
  }
  //add the puzzle table to the puzzle section div
  document.getElementById('puzzle-section').appendChild(table);

  /*CREATE THE DOCK*/
  //create a table for the dock
  var table = createTable("dock");
  //create a new row for the dock table
  var row = document.createElement("TR");
  //create the dock in a single cell and add it to the row
  row.appendChild(createDock(levelInfo['dock']));
  //add the row to the dock table
  table.appendChild(row);

  //add dock table to the dock section div
  document.getElementById('dock-section').appendChild(table);

  /*CREATE THE BACKGROUND*/
  //add each butterfly in the list
  for (var i = 0; i < butterflies.length; i++) {
    //create the div for each butterfly
    var butterfly = createDiv(butterflies[i], "butterfly");
    //add the butterfly to the game
    document.getElementById("game").appendChild(butterfly);
    //add animations to the butterfly using animate(elem) in background.js
    animateButterfly(butterfly);
  }


  document.getElementById('playable-section').addEventListener("mousedown", function() {
    //increase the number of clicks by one each time the player clicks on the playable section
    clickCount++;
  });
}