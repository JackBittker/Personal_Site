function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(1);
}
var tempcolor = 0;
var direction = 0;
function draw() {
  // Call the variableEllipse() method and send it the
  // parameters for the current mouse position
  // and the previous mouse position
    if (direction == 0){
    fill(tempcolor)
        tempcolor ++;
        tempcolor ++;
    }
    if (tempcolor >= 255){
            direction = 1;
        }
    if (direction == 1){
    fill(tempcolor)
        tempcolor --;
        tempcolor --;
    }
    if (tempcolor <= 0){
            direction = 0;
    }
    
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// The simple method variableEllipse() was created specifically 
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly 

function variableEllipse(x, y, px, py) {
  var speed = abs(x-px) + abs(y-py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}