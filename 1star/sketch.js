let ball, paddle;

function setup() {
    createCanvas(400, 600);
    ball = new Ball(width / 2, 0);
    paddle = new Paddle(width / 2, height - 20);
}

function draw() {
    background(225);
    paddle.setPosition(mouseX - paddle.getWidth() / 2, mouseY - paddle.getHeight() / 2);
    if (ball.hit(paddle)) {
        // Handle collision
        ball.setPosition(paddle.getX() + paddle.getWidth() / 2, paddle.getY() - ball.getHeight() / 2);
    } else {
        ball.move();
    }
        ball.draw();
        paddle.draw();
 }

 function keyPressed() {
    if (key === 's') {
        ball.setPosition(random(width), 0);
    }
}