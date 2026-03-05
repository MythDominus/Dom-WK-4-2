/** @type {Bullet[]} */
const bullets = [];
const MAX_BULLETS = 50;
let nextBullet = 0;

const enemies = new Set();
const NUM_ENEMIES = 5;

let player;

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
    
    for (const enemy of enemies) {
        enemy.move();
        enemy.draw();
        for (const bullet of bullets) {
            if (bullet.isActive() && bullet.hit(enemy)) {
                console.log("Hit!");
                enemies.delete(enemy);
                bullet.setPosition(-50, -50);
            }
        }
    } 
    if (keyIsPressed) {
        movePlayer();
    } else {
        player.setStatus(player.STOP);
    }
    player.draw();
}

function keyPressed() {
    // Loop until an inactive bullet is found
    while (bullets[nextBullet].isActive()) {
        nextBullet = (nextBullet + 1) % MAX_BULLETS; // When the last index is reached, go back to 0
    }
    bullets[nextBullet].fire(300, 500);
}

function movePlayer() {