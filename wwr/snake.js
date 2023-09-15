const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const grid = 20; // Size of each grid cell
const width = canvas.width / grid;
const height = canvas.height / grid;

const snake = [{ x: 5, y: 5 }]; // Initial position of the snake
let food = {}; // Position of the food
let direction = "right"; // Initial direction of the snake
let score = 0; // Initial score

function generateFood() {
    food = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height)
    };
}

function update() {
    // Update snake position based on the direction
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    // Check for collisions with walls or itself
    if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height || checkCollision(head)) {
        gameOver();
        return;
    }

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head); // Grow the snake
        score++;
        generateFood();
    } else {
        // Move the snake
        snake.unshift(head);
        snake.pop();
    }
}

function checkCollision(head) {
    // Check if the snake collides with itself
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    snake.forEach(segment => {
        ctx.fillStyle = "#1abc9c"; // Snake color
        ctx.fillRect(segment.x * grid, segment.y * grid, grid, grid);
    });

    // Draw the food
    ctx.fillStyle = "#e74c3c"; // Food color
    ctx.fillRect(food.x * grid, food.y * grid, grid, grid);

    // Draw the score
    ctx.fillStyle = "#333";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function gameOver() {
    // Game over logic
    alert("Game Over! Your Score: " + score);
    resetGame();
}

function resetGame() {
    // Reset the game to start a new round
    snake.length = 1;
    snake[0] = { x: 5, y: 5 };
    direction = "right";
    score = 0;
    generateFood();
}

document.addEventListener("keydown", (event) => {
    // Handle user input to change snake direction
    const key = event.keyCode;
    switch (key) {
        case 37: // Left arrow key
            direction = "left";
            break;
        case 38: // Up arrow key
            direction = "up";
            break;
        case 39: // Right arrow key
            direction = "right";
            break;
        case 40: // Down arrow key
            direction = "down";
            break;
    }
});

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

generateFood();
gameLoop();
