//start game function
//fires on page load
// will fire the generate grid function and move snake function
// will also need a function to change the value of direction
// 1. generate grid
// 2. display snake
//add class depending on the value of current snake
// 3. move snake
// update value of current snake every interval
// remove tail
// add head
// head value will be calculated based on a direction value
// 4. spawn apple
//will randomly spawn in a square on the grid
// 5. apple makes snake longer
//multiple ways of acheiving this

// 6. if snake hits something game over


// lets draw a grid and display a snake taking up 3 blocks first

let grid = document.querySelector(".grid")
let popup = document.querySelector(".popup");
let squares = document.querySelectorAll(".grid div")
let currentSnake = [2, 1, 0]
let direction = 1
let intervalTime = 1000
let interval = 1000
let width = 10;

createBoard = () => {
    popup.style.display = "none";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        grid.appendChild(div)
    }
}

changeDirection = () => {
    document.addEventListener("keypress", (e) => {
        if (e.key === 'd') {
            direction = 1; // right
        } else if (e.key = 'w') {
            direction = -width; //if we press the up arrow, the snake will go ten divs up
        } else if (e.key = 'a') {
            direction = -1; // left, the snake will go left one div
        } else if (e.key = 's') {
            direction = +width; // down the snake head will instantly appear 10 divs below from the current div
        }

    }, false)
} 

drawSnake = () => {
    let squares = document.querySelectorAll(".grid div")
    let currentSnake = [2, 1, 0]
    currentSnake.forEach(index => squares[index].classList.add("snake"))
}

moveSnake = () => {
    let squares = document.querySelectorAll(".grid div")
    let tail = currentSnake.pop()
    //remove tail
    squares[tail].classList.remove("snake")
    //add head
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add("snake")
}

createBoard()
drawSnake()
changeDirection()
interval = setInterval(moveSnake, intervalTime)