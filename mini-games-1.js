function startGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        let guessInput = prompt("Угадай число от 1 до 100");
        
        if (guessInput === null) {
            alert("Игра окончена.");
            break;
        }
        
        let guessNumber = Number(guessInput);
        
        if (isNaN(guessNumber)) {
            alert("Пожалуйста, введите число!");
            continue;
        }
        
        if (guessNumber === randomNumber) {
            alert("Поздравляю, ты угадал число!");
            break;
        } else if (guessNumber > randomNumber) {
            alert("Твое число больше загаданного, попробуй еще!");
        } else {
            alert("Твое число меньше загаданного, попробуй еще!");
        }
    }
}

const gameButton = document.getElementById('startGameBtn');

gameButton.addEventListener('click', startGame);
