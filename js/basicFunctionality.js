/*This file contains the basic JavaScript functions that will be used in the entire game*/

/*Once the window loads, start the game*/
window.onload = function() {
  startGame();
}


function clickSettings() {

  //play the select sound once the settings gear is clicked
  playSelectSound();

  //get the div which contains the settings menu
  var settings = document.getElementById("setting-details");

  //toggle the menu details to pop in and out from behind the settings gear
  settings.classList.toggle("is-inactive");
}


function toggleMusic(event) {

  //play the select sound once the music icon is clicked
  playSelectSound();

  //set the music mute status
  window.music = !window.music;

  //update the background music 'muted' attribute to match the status we have set before
  var music = document.getElementById("bg");
  music.muted = window.music;

  //change the music icon depending on the mute status
  if (window.music) {
    //if music is muted, set this icon
    event.target.src = "images/music-stop.png";
  } else {
    //if music is unmuted, set this icon
    event.target.src = "images/music-player.png";
  }
}


function toggleSounds(event) {

  //set the game sounds mute status
  window.sounds = !window.sounds;

  //play the select sound once the sound icon is clicked
  playSelectSound();

  //change the music icon depending on the mute status
  if (window.sounds) {
    //if music is muted, set this icon
    event.target.src = "images/mute.png";
  } else {
    //if music is muted, set this icon
    event.target.src = "images/speaker.png";
  }
}


function playSelectSound() {

  //get the select sound element
  var sound = document.getElementById("select");

  //set the mute status of the sound depending on the game sounds mute status
  sound.muted = window.sounds;

  //play the sound
  sound.play();
}


function playClickSound() {

  //get the click sound element
  var sound = document.getElementById("click");

  //set the mute status of the sound depending on the game sounds mute status
  sound.muted = window.sounds;

  //play the sound
  sound.play();
}


function playDropSound() {

  //get the drop sound element
  var sound = document.getElementById("drop");

  //set the mute status of the sound depending on the game sounds mute status
  sound.muted = window.sounds;

  //play the sound
  sound.play();
}


function playSuccessSound() {

  //get the success sound element
  var sound = document.getElementById("success");

  //set the mute status of the sound depending on the game sounds mute status
  sound.muted = window.sounds;

  //play the sound
  sound.play();
}


function getTableId(target)
{

  var el = target;

  //keep looping until the DOM of 'TABLE' type is reached
  while (el.nodeName.toUpperCase() != 'TABLE') {
    //move to the parent if the current element isn't a 'TABLE'
    el = el.parentElement;
  }
  //get ID of the table
  tableId = el.id;

  //return the table ID
  return tableId;
}


function getCellId(target)
{

  var el = target;

  //keep looping until the DOM of 'TD' type is reached
  while (el.nodeName.toUpperCase() != 'TD') {
    //move to the parent if the current element isn't a 'TD'
    el = el.parentElement;
  }
  //get ID of the cell
  cellId = el.id;

  //return the cell ID
  return cellId;
}


function getImageId(target) {
  //get list of all elements inside this HTML element
  var el = target.children;

  //loop on all elements inside the HTML element
  for (var i = 0; i < el.length; i++) {
    //check if the current child element is of the 'IMG' type
    if (el[i].nodeName.toUpperCase() == 'IMG') {
      //get ID of the image
      imageId = el[i].id;

      //return the image ID
      return imageId;
    }
  }
}


function loadNextLevel() {
  //play the select sound
  playSelectSound();
  //set the current level as the next level of the level currently being played
  window.currentLevel = window.levelInfo["nextLevel"];
  //load the game level
  loadLevel();
}


function reloadLevel() {
  //play the select sound
  playSelectSound();
  //load the game level again
  loadLevel();
}