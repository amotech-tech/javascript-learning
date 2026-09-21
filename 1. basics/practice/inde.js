const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

const scoreDisplay = document.getElementById("score");
const speedDisplay = document.getElementById("speed");

let lane = 1;

// Three road lanes
const lanes = [30, 125, 220];

let enemyY = -120;
let score = 0;
let speed = 5;

let gameRunning = true;


// ============================
// PLAYER CONTROLS
// ============================

document.addEventListener("keydown", function(event) {

    if (!gameRunning) {
        return;
    }

    // Move ONE lane left
    if (event.key === "ArrowLeft") {

        if (lane > 0) {
            lane--;
            player.style.left = lanes[lane] + "px";
        }

    }

    // Move ONE lane right
    if (event.key === "ArrowRight") {

        if (lane < 2) {
            lane++;
            player.style.left = lanes[lane] + "px";
        }

    }

});


// ============================
// ENEMY CAR
// ============================

function moveEnemy() {

    if (!gameRunning) {
        return;
    }

    enemyY += speed;

    enemy.style.top = enemyY + "px";


    // Enemy passes player
    if (enemyY > 650) {

        enemyY = -120;

        // Pick random lane
        const randomLane =
            Math.floor(Math.random() * 3);

        enemy.style.left =
            lanes[randomLane] + "px";

        score++;

        scoreDisplay.textContent = score;


        // Increase speed every 5 points
        if (score % 5 === 0) {

            speed++;

            speedDisplay.textContent = speed;

        }
    }


    // ============================
    // COLLISION
    // ============================

    const playerRect =
        player.getBoundingClientRect();

    const enemyRect =
        enemy.getBoundingClientRect();


    if (
        playerRect.left < enemyRect.right &&
        playerRect.right > enemyRect.left &&
        playerRect.top < enemyRect.bottom &&
        playerRect.bottom > enemyRect.top
    ) {

        gameOver();

        return;
    }


    requestAnimationFrame(moveEnemy);
}


// ============================
// GAME OVER
// ============================

function gameOver() {

    gameRunning = false;

    // STOP ROAD MOVEMENT
    document.querySelectorAll(".lane").forEach(function(line) {
        line.style.animationPlayState = "paused";
    });

    // Stop the cars
    enemy.style.animationPlayState = "paused";

    setTimeout(function() {

        alert(
            "💥 GAME OVER!\n\nScore: " + score
        );

    }, 100);

}


// ============================
// RESTART
// ============================

function restartGame() {

    location.reload();

}


// START GAME

moveEnemy();