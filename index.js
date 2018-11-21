var canvas = document.getElementById("Canvas");
var ct = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 0;
var dy = -0;
var tic = 0;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var gameOverNotify = document.querySelector('.game-over-notify');
var interval;
var red = Math.floor(Math.random() * 255)
var green = Math.floor(Math.random() * 255)
var blue = Math.floor(Math.random() * 255)
var score = 0;
var bricks = [];
for (var col = 0; col < brickColumnCount; col++) {
    bricks[col] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[col][r] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
gameOverNotify.addEventListener("click", function () {
    document.location.reload();
});
window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "83") {
       dy=-2;
        dx=2;
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function collisionDetection() {
    for (var col = 0; col < brickColumnCount; col++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[col][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score == brickRowCount * brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
    function drawBall() {
        ct.beginPath();
        ct.arc(x, y, ballRadius, 0, Math.PI * 2);
        ct.fillStyle = `rgb(${red},${green},${blue})`;;
        ct.fill();
        ct.closePath();
    }

    function drawPaddle() {
        ct.beginPath();
        ct.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ct.fillStyle = "#000000";
        ct.fill();
        ct.closePath();
    }

    function drawBricks() {
        for (var col = 0; col < brickColumnCount; col++) {
            for (var r = 0; r < brickRowCount; r++) {
                if (bricks[col][r].status == 1) {
                    var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
                    var brickY = (col * (brickHeight + brickPadding)) + brickOffsetTop;
                    bricks[col][r].x = brickX;
                    bricks[col][r].y = brickY;
                    ct.beginPath();
                    ct.rect(brickX, brickY, brickWidth, brickHeight);
                    ct.fillStyle = "#000000";
                    ct.fill();
                    ct.closePath();
                }
            }
        }
    }

    function drawScore() {
        ct.font = "16px Arial";
        ct.fillStyle = "#0095DD";
        ct.fillText("Score: " + score + "                          Press S to Start", 8, 20);
    }

    function draw() {
        ct.fillStyle="rgba(173,216,230,.08)"
        ct.fillRect(0,0,canvas.width,canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        collisionDetection();

        tic++;
        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) {
                dy = -dy;
            } else {
      gameOverNotify.style.display = 'flex';
      clearInterval(interval);
      return;
    }
        }
        if (tic % 10 == 0) {
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
        }
        console.log(tic);


        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 3;
        } else if (leftPressed && paddleX > 0) {
            paddleX -= 3;
        }

        x += dx;
        y += dy;
    }

    interval = setInterval(draw, 7);
