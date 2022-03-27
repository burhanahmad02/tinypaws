
function animateButterfly(butterflyDiv) {

  
  var speedX = 4,
    speedY = 4;
  //this sets the starting position of the butterfly in a random position in the screen
  var currentX = Math.floor(Math.random() * (window.innerWidth - 30)),
    currentY = Math.floor(Math.random() * (window.innerHeight - 40));
  //this sets the number os steps the butterfly will take in a direction before it changes it's direction (either along X or Y axis)
  var countX = 1,
    countY = 2;

  //create an interval for the movement of the butterfly
  var motionInterval = setInterval(function() {
      //if the counter for movement along X-axis has run out then we should change the direction
      if (countX < 0) {
        //randomly assign whether the direction should be changed
        var directionX = Math.random() >= 0.5;
        if (directionX) {
          //change the direction of movement along X-axis
          speedX = -1 * speedX;
        }
        //set the new counter value for movement along X-axis to be between 5-20 steps
        countX = Math.floor(Math.random() * 20) + 5;
      }
      //if the counter for movement along Y-axis has run out then we should change the direction
      if (countY < 0) {
        //randomly assign whether the direction should be changed
        var directionY = Math.random() >= 0.5;
        if (directionY) {
          //change the direction of movement along Y-axis
          speedY = -1 * speedY;
        }
        //set the new counter value for movement along Y-axis to be between 5-20 steps
        countY = Math.floor(Math.random() * 20) + 5;
      }

      //set the new X and Y positions for the butterfly
      currentX += speedX;
      currentY += speedY;

      //check if the butterfly is moving out of the screen from either the left or right of the screen
      if (currentX >= (window.innerWidth - 35) && speedX > 0) {
        //if the butterfly is moving out of the right of the screen and is moving in the right direction

        //set the butterfly on the right edge of the screen
        currentX = window.innerWidth - 35;
        //set the direction of the butterfly's movement to move towards the left of the screen
        speedX = -1 * speedX;
      } else if (currentX <= 0 && speedX < 0) {
        //if the butterfly is moving out of the left of the screen and is moving in the left direction

        //set the butterfly on the left edge of the screen
        currentX = 0;
        //set the direction of the butterfly's movement to move towards the right of the screen
        speedX = -1 * speedX;
      }

      //check if the butterfly is moving out of the screen from either ther top or bottom of the screen
      if (currentY >= (window.innerHeight - 50) && speedX > 0) {
        //if the butterfly is moving out of the bottom of the screen and is moving in the downwards direction

        //set the butterfly on the bottom edge of the screen
        currentY = window.innerHeight - 50;
        //set the direction of the butterfly's movement to move towards the top of the screen
        speedY = -1 * speedY;
      } else if (currentY <= 0 && speedX < 0) {
        //if the butterfly is moving out of the top of the screen and is moving in the upwards direction

        //set the butterfly on the top edge of the screen
        currentY = 0;
        //set the direction of the butterfly's movement to move towards the bottom of the screen
        speedY = -1 * speedY;
      }

      //set the X and Y positions of the butterfly
      butterflyDiv.style.left = currentX + "px";
      butterflyDiv.style.top = currentY + "px";

      //count down the steps taken by the butterfly in both X and Y axis
      countX--;
      countY--;
    },
    200); //end of setInterval

 
  var position = 0;
  var tID = setInterval(function() {
    butterflyDiv.style.backgroundPosition = "-" + position + "px 0px";
    //we insert the variable "position"
    if (position < 160) {
      position = position + 32;
    }
    //we increment the position by 32 each time
    else {
      position = 0;
    }
    //reset the position to 0px, once position exceeds 160px
  }, 100); //end of setInterval
}