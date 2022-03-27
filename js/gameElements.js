/*This file contains all the functions required to build the different elements for the game*/


function createTable(tableId) {
    //create the table element
    var table = document.createElement("TABLE");

    //set table ID if for the table element if the parameter 'tableId' is valid
    if (tableId) {
        table.setAttribute("id", tableId);
    }

    //return the table element
    return table;
}


function createDiv(divId, className) {
    //create a div element
    var div = document.createElement("DIV");

    //set the ID for the div element if the parameter 'divId' is valid
    if (divId) {
        div.setAttribute("id", divId);
    }

    //set the class for the div element if className is valid
    if (className) {
        div.className = className;
    }

    //return the div element
    return div;
}


function createLink(link, text, title) {
    //create an anchor element
    var anchor = document.createElement("A");

    //create the text element for the anchor
    var linkText = document.createTextNode(text);
    //attach the text element for the anchor
    anchor.appendChild(linkText);

    //set the link for the anchor
    anchor.href = link;

    //set the title for the anchor if it exist
    if (title) {
        anchor.title = title;
    }

    //we want to open a link in a new tab
    anchor.target = "_blank";

    //return the anchor element
    return anchor;
}


function createImg(imagePath, className, imgId) {
    //create an image element
    var img = document.createElement("IMG");

    //set the ID for the image element if the parameter 'imgId' is valid
    if (imgId) {
        img.setAttribute("id", imgId);
    }

    //set the class for the image element if the parameter 'className' is valid
    if (className) {
        img.className = className;
    }

    //set the image source path for the image element
    img.src = imagePath;

    //return the image element
    return img;
}

function createHeader(header, text) {
    //create the header element
    var header = document.createElement(header);

    //create the text element for the header
    var textElement = document.createTextNode(text);
    //attach the text element to the header element
    header.appendChild(textElement);

    //return the header element
    return header;
}


function createParagraph(paraId, text) {
    //create the paragraph element
    var para = document.createElement("P");

    //set the ID for the paragraph element if the parameter 'paraId' is valid
    if (paraId) {
        para.setAttribute("id", paraId);
    }

    //create the text element for the paragraph
    var textElement = document.createTextNode(text);
    //attach the text element to the paragraph element
    para.appendChild(textElement);

    //return the paragraph element
    return para;
}


function createButton(text, onclick) {
    //create the button element
    var button = document.createElement("BUTTON");

    //create the text element for the button
    var textElement = document.createTextNode(text);
    //attach the text element to the button element
    button.appendChild(textElement);

    //set the event listener function for when the button is clicked if the parameter 'onclick' is valid
    if (onclick) {
        button.addEventListener("click", onclick);
    }

    //return the button element
    return button;
}


function createSound(soundId, soundSrc, muted, autoplay) {
    //create a sound element
    var sound = document.createElement("AUDIO");

    //set the ID for the sound element
    sound.setAttribute("id", soundId);
    //set the sound source path for the sound element
    sound.setAttribute("src", soundSrc);
    //set if the sound should be muted
    sound.muted = muted;
    //set if the sound should be on autoplay
    sound.autoplay = autoplay;

    //return the sound element
    return sound;
}


function createTableCell(cellId, ifPuzzle) {
    //create the table cell element
    var cell = document.createElement("TD");

    //set the ID for the cell element if the parameter 'cellId' is valid
    if (cellId) {
        cell.setAttribute("id", cellId);
    }

    //set the dimension of the cell if the cell is created for the puzzle
    if (ifPuzzle) {
        cell.style.height = window.dimensions;
        cell.style.width = window.dimensions;
    }

    //return the table cell element
    return cell;
}

function createPuzzleSlot(slotProperties, cellId) {
    //create a puzzle cell with the cellId
    var puzzleCell = createTableCell(cellId, true);

    //handle properties of each puzzle table cell depending on the slot properties
    if (slotProperties["active"]) {
        /*if the slot is active then it is a slot where the player can place a path element*/

        //set the slot class
        puzzleCell.className = "slot";

        //set an event listener to allow the player drops a path element on the slot
        puzzleCell.addEventListener("dragover", allowDrop);
        //set an event listener to handle when the player drops a path element on the slot
        puzzleCell.ondrop = function () {
            drop(event, 'puzzle');
        };
    } else if (!slotProperties["start"] && !slotProperties["end"]) {

        //set the slot class
        puzzleCell.className = "slot inactive";

        //if the slot has a path element associated with it
        if (slotProperties["pathElement"]) {
            //create the image for the path element
            let puzzleSlot = createImg("images/" + slotProperties["pathElement"], slotProperties["position"]);
            //this image should not be draggable
            puzzleSlot.setAttribute("draggable", "false");
            //add the image of the path element to the cell
            puzzleCell.appendChild(puzzleSlot);
        }
    } else if (slotProperties["start"])
    {

        puzzleCell.className = "slot start";

        //create the kitten and add it to the slot
        //if the slot is too small we want to use the smaller characters
        if (window.dimensions.replace(/[^\d.]/g, '') > 15) {
            let startDiv = createDiv(undefined, "kitten-1");
            puzzleCell.appendChild(startDiv);
        } else {
            let startDiv = createDiv(undefined, "kitten-2");
            puzzleCell.appendChild(startDiv);
        }

        //create the image for the path element from where the puzzle should start
        let startImg = createImg("images/path-0.png", slotProperties["position"])
        //this undos the CSS applied by the startDiv
        if (window.dimensions.replace(/[^\d.]/g, '') > 15) {
            startImg.style.marginTop = "-26%";
        } else {
            startImg.style.marginTop = "-36%";
        }
        startImg.style.zIndex = "-1";
        //this image should not be draggable
        startImg.setAttribute("draggable", "false");
        //add the image of the path element to the cell
        puzzleCell.appendChild(startImg);
    } else if (slotProperties["end"]) {

        //set the slot class
        puzzleCell.className = "slot end";

        //create the cat and add it to the slot
        //if the slot is too small we want to use the smaller characters
        if (window.dimensions.replace(/[^\d.]/g, '') > 15) {
            let endDiv = createDiv(undefined, "cat-1");
            puzzleCell.appendChild(endDiv);
        } else {
            let endDiv = createDiv(undefined, "cat-2");
            puzzleCell.appendChild(endDiv);
        }

        //create the image for the path element where the puzzle should end
        let endImg = createImg("images/path-0.png", slotProperties["position"])
        //this undos the CSS applied by the endDiv
        if (window.dimensions.replace(/[^\d.]/g, '') > 15) {
            endImg.style.marginTop = "-16%";
        } else {
            endImg.style.marginTop = "-21%";
        }
        endImg.style.zIndex = "-1";
        //this image should not be draggable
        endImg.setAttribute("draggable", "false");
        //add the image of the path element to the cell
        puzzleCell.appendChild(endImg);
    }

    //return the table cell containing the puzzle slot details
    return puzzleCell;
}


function createDock(dockInfo) {
    //create a table cell
    var cell = createTableCell();

    //loop on the dockInfo where each JSON Object identifies each puzzle path item inside the dock
    for (let dockCount = 0; dockCount < dockInfo.length; dockCount++) {
        //create a div for a puzzle path item
        var dockDiv = createDiv("dock-PE" + (dockCount + 1));
        //set the class for the div
        dockDiv.className = "slot inactive";

        //set an event listener to allow the player drops a path element on the dock
        dockDiv.addEventListener("dragover", allowDrop);
        //set an event listener to handle when the player drops a path element on the dock
        dockDiv.ondrop = function () {
            //drop(event, parentId) in gamePlay.js
            drop(event, 'dock');
        };

        //create the image for the path element
        var dockImg = createImg("images/" + dockInfo[dockCount]['pathElement'], "original", "PE" + (dockCount + 1));
        //this path element should be draggable
        dockImg.draggable = 'true';
        //drag() in gamePlay.js
        dockImg.addEventListener("dragstart", drag, false);
        //rotateImage() in gamePlay.js
        dockImg.addEventListener("click", rotateImage);
        //add this image to the div for the puzzle path item
        dockDiv.appendChild(dockImg);

        //create a paragraph to show the number of items available for the path element
        var dockNumber = createParagraph("PE" + (dockCount + 1) + "-count", dockInfo[dockCount]['amount'])
        //add this paragraph to the div for puzzle path item
        dockDiv.appendChild(dockNumber);

        //create a new div and add the div for the puzzle path item
        var div = createDiv();
        div.appendChild(dockDiv);

        //add this new div to the table cell
        cell.appendChild(div);
    }

    //return the table cell
    return cell;
}


function scoreStars(score) {
    //create a new div to contain the score of the player
    var div = createDiv("score");

    //loop three times to create the three stars
    for (let i = 1; i <= 3; i++) {
        var img;

        if (i <= score) {
            //if the index of the score is less than or equal to the score then set the star of that index (these are yellow stars)
            img = createImg("images/" + i + "-star.png", "star");
        } else {
            //otherwise set this image (this is the grey star)
            img = createImg("images/0-star.png", "star");
        }
        //add the image to the div
        div.appendChild(img);
    }
    //return the div
    return div;
}


function popUpFill(levelNumber, nextLevel) {
    //create a new div to contain the entire pop up information
    var div = createDiv();

    //create a header containing the level number and add to the div
    var text = createHeader("h2", "Level " + levelNumber);
    div.appendChild(text);

    //create a header containing the text 'COMPLETED' and add to the div
    text = createHeader("h3", "COMPLETED")
    div.appendChild(text);

    //create a new div to contain the buttons in the pop up
    var innerDiv = createDiv("buttons");

    //check if next level exists
    if (nextLevel != "None") {
        //if next level exists then allow the user to move on to the next level

        //create the icon
        var img = createImg("images/play-button.png");
        //loadNextLevel() in basicFunctionality.js
        img.addEventListener("click", loadNextLevel);
        //add this icon to the div containing the buttons
        innerDiv.appendChild(img);
    }

    //create the icon to allow the user to restrat the level
    img = createImg("images/repeat.png");
    //reloadLevel() in basicFunctionality.js
    img.addEventListener("click", reloadLevel)
    //add this icon to the div containing the buttons
    innerDiv.appendChild(img);

    //create the icon to allow the user to go back to the level selection page
    img = createImg("images/menu.png");
    //loadLevelSelectionPage() in createLevelSelection.js
    img.addEventListener("click", loadLevelSelectionPage)
    //add this icon to the div containing the buttons
    innerDiv.appendChild(img);

    //add buttons div to the main div
    div.appendChild(innerDiv);

    //return the div element
    return div;
}

function createGhostDiv(imgSrc, className) {
    //create a new div
    var ghostDiv = createDiv("ghost", "ghost")

    //create a new image with the given image source path and class
    var img = createImg(imgSrc, className);
    //set the size of the image to match the size of the slots
    img.style.height = window.dimensions;
    img.style.width = window.dimensions;
    //add the image to the div
    ghostDiv.appendChild(img);

    //return the div element
    return ghostDiv;
}