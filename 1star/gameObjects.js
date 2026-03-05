class CollisionRect {
    #rectX;
    #rectY;
    #rectWidth;
    #rectHeight;

    constructor() {}

    /**
     * Gets the x coordinate of the collision rect
     * @returns {number}
     */
    getX() {
        return this.#rectX;
    }

    /**
     * Gets the y coordinate of the collision rect
     * @returns {number}
     */
    getY() {
        return this.#rectY;
    }


    /**
     * Gets the width of the collision rect
     * @returns {number}
     */
    getWidth() {
        return this.#rectWidth;
    }


    /**
     * Gets the height of the collision rect
     * @returns {number}
     */
    getHeight() {
        return this.#rectHeight;
    }

    /**
     * Sets the position of the collision rect
     * @param {number} newX 
     * @param {number} newY 
     */
    setPosition(newX, newY) {
        this.#rectX = newX;
        this.#rectY = newY;
    }

    /**
     * Set the dimensions of the collision rect
     * @param {number} newWidth 
     * @param {number} newHeight 
     */
    setRectangle(newWidth, newHeight) {
        this.#rectWidth = newWidth;
        this.#rectHeight = newHeight;
    }


    /**
     * Tests if this CollisionRect has collided with another
     * @param {CollisionRect} other 
     * @returns {boolean}
     */
    hit(other) {
        if (this.#rectX + this.#rectWidth >= other.getX()
            && this.#rectX <= other.getX() + other.getWidth()
            && this.#rectY + this.#rectHeight >= other.getY()
            && this.#rectY <= other.getY() + other.getHeight()) {
            return true;
        }
        return false;
    }
}

class Ball extends CollisionRect {
    #x
    #y
    #speed = 5;
    #SIZE = 20;

    constructor(x, y) {
        super();
        this.#x = x;
        this.#y = y;
        this.setRectangle(this.#SIZE, this.#SIZE);
        this.#updateCollisionRect();
    }

    #updateCollisionRect() {
        super.setPosition(this.#x - this.#SIZE / 2, this.#y - this.#SIZE / 2);
    }

    draw() {
        fill(255, 0, 0);
        circle(this.#x, this.#y, this.#SIZE);
    }

    move() {
        this.#y += this.#speed;
        this.#updateCollisionRect();
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
        this.#updateCollisionRect();
    }
}

class Paddle extends CollisionRect {
    #x
    #y
    #WIDTH = 50
    #HEIGHT = 20

    constructor(x, y) {
        super();
        this.#x = x;
        this.#y = y;
        this.setRectangle(this.#WIDTH, this.#HEIGHT);
        this.setPosition(this.#x, this.#y);
    }

    draw() {
        fill(0, 0, 255);
        rect(this.#x, this.#y, this.#WIDTH, this.#HEIGHT);
    }

    setPosition(x, y) {
        this.#x = x;
        this.#y = y;
        super.setPosition(this.#x, this.#y);
    }
}