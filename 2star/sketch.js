/** @type {Bullet[]} */
const bullets = [];
const MAX_BULLETS = 50;
let nextBullet = 0;

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < MAX_BULLETS; i++) {
        bullets.push(new Bullet());
    }
}

function draw() {
    background(255);
    for (const bullet of bullets) {
        if (bullet.isActive()) {
            bullet.move();
            bullet.draw();
        }
    }
}

function keyPressed() {
    // Loop until an inactive bullet is found
    while (bullets[nextBullet].isActive()) {
        nextBullet = (nextBullet + 1) % MAX_BULLETS; // When the last index is reached, go back to 0
    }
    bullets[nextBullet].fire(300, 500);
}