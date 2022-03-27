/*This file contains the functions required to create the legal page*/


function createLegalSection() {
    //play the select sound
    playSelectSound();

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
    //create a div
    var legal = createDiv("legal", "legal");

    //create a div to set all the attribution
    var legalAttributions = createDiv("legalAtt", "legalAtt");

    //add a header to the page
    var header = createHeader("h1","Credits");
    legalAttributions.appendChild(header);

    //add another header to the page for images
    header = createHeader("h3","Images");
    legalAttributions.appendChild(header);

    //*ADD ATTRIBUTIONS FOR IMAGES*//

    //we create a temporary div
    let div = createDiv();
    //we create a link for an attribution
    let link = createLink("https://www.freepik.com/free-photos-vectors/icon","Icon vector created by freepik");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    let text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("www.freepik.com","www.freepik.com","Freepik");
    //we add the link to the div
    div.appendChild(link);
    text = document.createTextNode(" - ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-vector/hand-drawn-stars-collection_1622567.htm","Hand Drawn Stars Collection","Stars");
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);

    //we create a temporary div
    div = createDiv();
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-photos-vectors/character","Character vector created by freepik");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("www.freepik.com","www.freepik.com","Freepik");
    //we add the link to the div
    div.appendChild(link);
    text = document.createTextNode(" - ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-vector/kawaii-cat-collection_4320270.htm","Cat Collection","Favicon");
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);

    //we create a temporary div
    div = createDiv();
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-photos-vectors/nature","Nature vector created by freepik");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("www.freepik.com","www.freepik.com","Freepik");
    //we add the link to the div
    div.appendChild(link);
    text = document.createTextNode(" - ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-vector/mother-earth-day_3916399.htm","Mother Earth Day","Landing Page Background");
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);

    //we create a temporary div
    div = createDiv();
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-photos-vectors/background","Background vector created by freepik");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("www.freepik.com","www.freepik.com","Freepik");
    //we add the link to the div
    div.appendChild(link);
    text = document.createTextNode(" - ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.freepik.com/free-vector/spring-landscape-background_1595186.htm","Spring Landscape","Level Page Background");
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);

    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Icons made by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.flaticon.com/authors/smashicons","Smashicons","Smashicons");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
     text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.flaticon.com/","www.flaticon.com","Flaticon");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
     text = document.createTextNode(" are licensed by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("http://creativecommons.org/licenses/by/3.0/","CC 3.0 BY","Creative Commons BY 3.0");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);



    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Icons made by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.flaticon.com/authors/roundicons","Roundicons","Roundicons");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://www.flaticon.com/","www.flaticon.com","Flaticon");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" are licensed by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("http://creativecommons.org/licenses/by/3.0/","CC 3.0 BY","Creative Commons BY 3.0");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);

    //add a line bar
    legalAttributions.appendChild(document.createElement("HR"));

    //add another header to the page for sounds
    header = createHeader("h3","Sounds");
    legalAttributions.appendChild(header);

    //*ADD ATTRIBUTIONS FOR SOUNDS*//

    //we create a temporary div
    div = createDiv();
    //add text to the div
    
    text = document.createTextNode("Music by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://soundimage.org/","Eric Matyas","Eric Matyas");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" - ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("http://soundimage.org/wp-content/uploads/2015/03/Whimsical-Popsicle.mp3","'Whimsical Popsicle'");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);




    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Sound by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org/people/gamer127/sounds/463202/","gamer127","Click");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org","Freesound");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);



    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Sound by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org/people/PaulMorek/sounds/330052/","PaulMorek","Drop");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org","Freesound");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);



    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Sound by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org/people/CmdRobot/sounds/239523/","CmdRobot","Rotation");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org","Freesound");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);



    //we create a temporary div
    div = createDiv();
    //add text to the div
    text = document.createTextNode("Sound by ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org/people/Higgs01/sounds/428156/","Higgs01","Success");
    //we add the link to the div
    div.appendChild(link);
    //add text to the div
    text = document.createTextNode(" from ");
    div.appendChild(text);
    //we create a link for an attribution
    link = createLink("https://freesound.org","Freesound");
    //we add the link to the div
    div.appendChild(link);
    //we add this div to the main legal section
    legalAttributions.appendChild(div);


    //_____________________________Credit Baji______________________________//




    //_______________________________________________________________________//

    //add all attributions to the main section
    legal.appendChild(legalAttributions);

    //create the button to start the game and set the on click function
    var newButton = createButton("Play Game", newGame);
    //add button to the main div
    legal.appendChild(newButton);


    //add div with the legal attributions to the document
    document.getElementById("game").appendChild(legal);
}