/*This file contains all the function required for the game play of a level*/

//this array contains the classes for the rotation of the path elements
var rotationClasses = ['original', 'rotationNinty', 'rotationOneEighty', 'rotationTwoSeventy'];


function drag(event) {
  //play the select sound
  playSelectSound();

  //set data transfer data items
  //set the ID of the image of the path element being dragged
  event.dataTransfer.setData("img", event.target.id);

  //set the ID of the parent from where the path element is being dragged from i.e. 'puzzle' or 'dock'
  var tableId = getTableId(event.target);
  event.dataTransfer.setData("starting", tableId);

  //set the ID of the puzzle cell from where the path element is being dragged from
  var cellId = getCellId(event.target);
  event.dataTransfer.setData("dragFrom", cellId);

  //if a source for the ghost image of the path element already exists, then delete it
  if (document.getElementById("ghost")) {
    document.body.removeChild(document.body.lastChild);
  }

  //create the div for the ghost image containing the image of the path element (of the same class) which is being dragged
  var ghostDiv = createGhostDiv(event.target.src, event.target.className);
  document.body.appendChild(ghostDiv);
  //set the ghost image of the image of the path element being dragged as the image in the ghost div
  event.dataTransfer.setDragImage(ghostDiv, 60, 60);
}


function allowDrop(event) {
  event.preventDefault();
}


function drop(event, parentId) {
  event.preventDefault();

  //check if a valid image is bring dropped here
  if(!event.dataTransfer.getData("img")){
    //if image isn't being dropped here then we don't run this function
    return;
  }

  // get the ID of image of the path element being dropeed
  var imgId = event.dataTransfer.getData("img");
  var elementId = imgId.substring(0, 3);

  //get where the path element started being dragged from
  var starting = event.dataTransfer.getData("starting");

  //get where the path element is being dropped
  var target = event.target;

  //if the path element isn't dropped in a cell, then get the parent table cell of the target
  if (target != "TD") {
    while (target.nodeName.toUpperCase() != 'TD') {
      target = target.parentElement;
    }
  }

  //check where the path element is being dropped i.e. 'puzzle' or 'dock'
  if (parentId == 'puzzle') {
    //if the path element is being dropped in the puzzle

    //get the cell ID from where the path element is dragged from
    var dragFrom = event.dataTransfer.getData("dragFrom");
    //get the cell ID where the path element is dropped to
    var dragTo = getCellId(event.target);

    //we only want to handle if the path element is dragged and dropped to a different cell(slot)
    if (dragTo != dragFrom) {
      //play the drop sound
      playDropSound();

      //get the path element that already exists in the slot where we have dropped a new path element at
      var imageInPlaceId = getImageId(target);
      var imageInPlace = document.getElementById(imageInPlaceId);

      //if the path element does already exist in the slot
      if (imageInPlace != undefined && imageInPlace.nodeName.toUpperCase() == 'IMG') {
        updateElementCount(imageInPlaceId.substring(0, 3), true);
      }

      //remove all children in the slot, this will remove the path element images that already exist in the slot
      while (target.hasChildNodes()) {
        target.removeChild(target.childNodes[0]);
      }

      //check where the path element was dragged from
      if (starting == 'puzzle') {

        //get the image being dragged
        var image = document.getElementById(imgId);
      } else {
        /*if the image is moved from the dock to a puzzle slot, then we clone the image from the dock and move that to the slot*/

        try {
          //clone the image being dragged if it exists
          var image = document.getElementById(imgId).cloneNode(true);
        }
        catch(err) {
          return;
        }

        //drag() in gamePlay.js
        image.addEventListener("dragstart", drag);
        //rotateImage() in gamePlay.js
        image.addEventListener("click", rotateImage);

        //set a unique ID for the path element
        image.id = elementId + '-' + clickCount;

        updateElementCount(elementId, false);
      }

      //add the image to the cell in the puzzle table
      target.appendChild(image);

      //check if the puzzle has been completed
      complete = checkIfCompleted();
    }
  } else {
    //if the path element is being dropped in the dock

    //play the drop sound
    playDropSound();

    //check where the path element is being dragged from
    if (starting == 'puzzle') {
      //if the path element is dragged from the puzzle to the dock

      //remove the path element image that is being dragged from the puzzle slot
      document.getElementById(imgId).remove();

      //get the ID of the path element
      var elementId = imgId.substring(0, 3);

      updateElementCount(elementId, true);
    }
  }

  //if the game is completed
  if (complete) {
    //show the pop up
    showPopUp();
  }
}


function rotateImage(event) {
  //check where the path element being clicked is placed, i.e. 'puzzle' or 'dock'
  var tableId = getTableId(event.target);

  //if the path element is being clicked inside the puzzle
  if (tableId == 'puzzle') {
    //play the click sound
    playClickSound();

    //get the current class of the path element image
    var oldClass = rotationClasses.indexOf(event.target.className);

    //get the next class in the rotationClasses array, this will rotate the image by 90 degrees
    var newClass = rotationClasses[(oldClass + 1) % 4];

    //update the class of the path element image to show the new rotation
    document.getElementById(event.target.id).className = newClass;

    //check if the level in completed
    complete = checkIfCompleted();

    //if the level is completed
    if (complete) {
      //this function will ensure that the pop up shows after the rotation animation ends
      setTimeout(function() {
        //show the pop up
        showPopUp();
      }, 350);
    }
  }
}


function updateElementCount(elementId, add) {
  //get the paragraph ID where the number of available elements of the path element is mentioned
  var elementCount = document.getElementById(elementId + '-count');

  //check if we need to add or subtract the number of available elements
  if (add) {
    //we increment the number of available elements by 1
    var newCount = parseInt(elementCount.innerHTML) + 1;
    elementCount.innerHTML = newCount;

    //if the number of available elements is 1 then we need to activate the path element in the dock
    if (newCount == 1) {
      var imageContainerId = 'dock-' + elementId;
      //activate the path element in the dock
      updateDockElement(imageContainerId);
    }
  } else {
    //we decrement the number of avialable elements by 1
    var newCount = parseInt(elementCount.innerHTML) - 1;
    elementCount.innerHTML = newCount;

    //if the number of available elements is 0 then we need to deactivate the path element in the dock
    if (newCount == 0) {
      var imageContainerId = 'dock-' + elementId;
      //deactivate the path element in the dock
      updateDockElement(imageContainerId);
    }
  }
}


function updateDockElement(elementContainerId) {
  //get the DIV element in the dock for the particular element
  var elementContainer = document.getElementById(elementContainerId);

  //find the IMG element inside the DIV element
  var child = elementContainer.children;
  for (var i = 0; i < child.length; i++) {
    //if the child is a IMG element
    if (child[i].nodeName.toUpperCase() == 'IMG') {
      //change the class of the IMG element between active and inactive
      child[i].classList.toggle("inactive");
    }
  }
}


function checkIfCompleted() {
  //get the current status of the puzzle
  var table = document.getElementById("puzzle");

  //check each element in the solution array
  for (let correctElements = 0; correctElements < window.levelInfo["solution"].length; correctElements++) {
    //get a correct element details
    const correctElement = window.levelInfo["solution"][correctElements];

    //this flag will be true if we find the correct element in the correct position in the correct slot in the puzzle
    var elementExists = false;

    //check each row in the puzzle
    for (let i = 0, row; row = table.rows[i]; i++) {
      //check each cell in the row of the puzzle
      for (let j = 0, col; col = row.cells[j]; j++) {
        
        if (!col.classList.contains("inactive") && col.children[0] != undefined && col.children[0].nodeName.toUpperCase() == 'IMG') {
          //get the row and column number
          const rowNumber = i + 1;
          const colNumber = j + 1;

          //get the image name of the path element
          const pathElement = col.children[0].src.substring(col.children[0].src.lastIndexOf("/") + 1);
          //get the position of the path element
          const pathPosition = col.children[0].className;

          
          if (rowNumber == correctElement["row"] && colNumber == correctElement["column"] &&
            pathElement == correctElement["pathElement"] && correctElement["position"].includes(pathPosition)) {
            //if the path element in the puzzle exists in the solution then set the flag as true
            elementExists = true;
          }
        }
      }
    }
    //if even one of the elements in the solution does not exist that means the level is not completed
    if (!elementExists) {
      //return false to signify that the level is not yet completed
      return false;
    }
  }
  //if all the elements in the solution exist in the puzzle then we return true to signify that the level is completed
  return true;
}


function showPopUp() {
  //get the div for the content inside the pop up
  var popCon = document.getElementById('pop-up-content');

  
  while (popCon.firstChild) {
    popCon.removeChild(popCon.firstChild);
  }

  //calculate the score for this level
  var score = calScore();

  //create and add the stars for the scores inside the pop up
  popCon.appendChild(scoreStars(score));

  //create and append the text and buttons inside the pop up
  popCon.appendChild(popUpFill(window.levelInfo["level"], window.levelInfo["nextLevel"]));

  //get the pop up div and show it
  var pop = document.getElementById('pop-up');
  setTimeout(function() {
    //this will make the pop up visible
    pop.style.display = "block";
    //play the success sound
    playSuccessSound();
  }, 200);

  //if the previous score of this level is less than the current score then update the score for this level
  if (window.userScore[window.currentLevel]["score"] < score) {
    //set the score for this level
    window.userScore[window.currentLevel]["score"] = score;
  }

  //if the next level exists then set that level as unlocked
  if (window.levelInfo["nextLevel"] != 'None' && !window.userScore[window.levelInfo["nextLevel"]]["unlocked"]) {
    //set the next level as unlocked
    window.userScore[window.levelInfo["nextLevel"]]["unlocked"] = true;
  }
}


function calScore() {
  //get the minimum and maximum clicks allowed in the level
  var min = window.levelInfo["minClicks"];
  var max = window.levelInfo["maxClicks"];

  //calculate the score based on the number of clicks inside the playable section
  if (clickCount <= min) {
    //if the number of clicks is less than the minimum clicks allowed then the score is 3
    return 3;
  }
  if (clickCount <= max) {
    //if the number of clicks is greater than the minimum clicks allowed but less than the maximum clicks allowed then the score is 2
    return 2;
  } else {
    //if the number of clicks is greater than the maximum clicks allowed then the score is 1
    return 1;
  }
}