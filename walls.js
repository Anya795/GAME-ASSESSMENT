let width;
let height;


let player = {
    x: 0,
    y: 0,
    size: 2,
}

let walls = [
    {//right wall
        x: 10,
        y: 10,
        width: 790,
        height: 0
    },
    {//up
        x: 10,
        y: 10,
        width: 800,
        height: 10
    },
    {//down
        x: 10,
        y: 590,
        width: 800,
        height: 10
    },
    {//left
        x: 10,
        y: 10,
        width: 10,
        height: 600
    },
]

/**
 * Checks if the player can move in the selected direction
 * @param {number} xDir -1 to move left, 1 to move right, 0 otherwise
 * @param {number} yDir -1 to move up, 1 to move down, 0 otherwise 
 * @returns {boolean} True if the block can move in the selected direction
 */
function canMove(xDir, yDir) {
    let newX = player.x + xDir;
    let newY = player.y + yDir;
    if (isOutOfBounds(newX, newY)) {
        return false;
    }
    for (let walls of walls) {
        if (!isOutsideWalls(newX, newY, walls)) {
            return false;
        }
    }
    return true;
}

/**
 * Checks if the player position is out of bounds of the canvas.
 * @param {number} x The x position
 * @param {number} y The y position
 * @returns {boolean} True if the position is out of bounds, false otherwise
 */
function isOutOfBounds(x, y) {
    return x < 0 || x > width - player.size || y < 0 || y > height - player.size;
}

/**
 * Checks if the player position is safely away from an individual obstacle
 * @param {number} x The x position 
 * @param {number} y The y position
 * @param {Object} walls An object literal describing the properties of an obstacle
 * @returns {boolean} True if the position is away from the obstacle, false otherwise
 */
function isOutsideWalls(x, y, walls) {
    return x + player.size <= walls.x || x >= walls.x + walls.width
            || y + player.size <= walls.y || y >= walls.y + walls.height
}

