let width = 800;
let height = 600;


let player1 = {
    x: 50,
    y: 50,
    size: 20,
}

let walls = [
    {//right wall
        x: 790,
        y: 0,
        width: 10,
        height: 600
    },
    {//up
        x: 0,
        y: 0,
        width: 800,
        height: 10
    },
    {//down
        x: 0,
        y: 590,
        width: 800,
        height: 10
    },
    {//left
        x: 0,
        y: 0,
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
    let newX = player1.x + xDir;
    let newY = player1.y + yDir;
    if (isOutOfBounds(newX, newY)) {
        return false;
    }
    for (let wall of walls) {
        if (!isOutsideWalls(newX, newY, wall)) {
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
    return x < 0 || x > width - player1.size || y < 0 || y > height - player1.size;
}

/**
 * Checks if the player position is safely away from an individual obstacle
 * @param {number} x The x position 
 * @param {number} y The y position
 * @param {Object} walls An object literal describing the properties of an obstacle
 * @returns {boolean} True if the position is away from the obstacle, false otherwise
 */
function isOutsideWalls(x, y, walls) {
    return x + player1.size <= walls.x || x >= walls.x + walls.width
            || y + player1.size <= walls.y || y >= walls.y + walls.height
}


