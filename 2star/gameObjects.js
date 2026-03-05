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
            && this.#rectX <= other.getY() + other.getHeight()) {
            return true;
        }
        return false;
    }
}


class Bullet extends CollisionRect {
    #speedY = -5;
    #active = false;

    constructor() {
        super();
        this.setRectangle(5, 30);
    }

    /**
     * Fires a bullet
     * @param {number} newX 
     * @param {number} newY 
     */
    fire(newX, newY) {
        this.setPosition(newX, newY);
        this.#active = true;
    }

    /**
     * Draws the bullet
     */
    draw() {
        fill(0);
        rect(this.getX(), this.getY(), 5, 30);
    }

    /**
     * Move the bullet up the screen
     */
    move() {
        this.setPosition(this.getX(), this.getY() + this.#speedY);
        if (this.getY() < -this.getHeight()) {
            this.#active = false;
        }
    }

    /**
     * Checks if the bullet is active
     * @returns {boolean}
     */
    isActive() {
        return this.#active;
    }
}