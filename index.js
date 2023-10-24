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

createBoard = () => {
    popup.style.display = "none";
    for(let i = 0; i < 100; i++) {
        let div = document.createElement("div")
        grid.appendChild(div)
    }
}

drawSnake = () => {
    let squares = document.querySelectorAll(".grid div")
    let currentSnake = [2, 1, 0]
    currentSnake.forEach(index => squares[index].classList.add("snake"))
}

createBoard()
drawSnake()