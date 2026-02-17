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


class MathProblemGenerator {
    constructor() {
        this.operations = ['+', '-', '*', '/'];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    generateProblem() {
        let num1, num2, operation, answer;
        const min = 1,
            max = 20;

        operation = this.operations[this.getRandomInt(0, 3)];

        switch (operation) {
            case '+':
                num1 = this.getRandomInt(min, max);
                num2 = this.getRandomInt(min, max);
                answer = num1 + num2;
            break;
            case '-':
                num1 = this.getRandomInt(min, max);
                num2 = this.getRandomInt(min, num1);
                answer = num1 - num2;
            break;
            case '*':
                num1 = this.getRandomInt(min, 10);
                num2 = this.getRandomInt(min, 10);
                answer = num1 * num2;
            break;
            case '/':
                num2 = this.getRandomInt(2, 10); // делитель
                num1 = num2 * this.getRandomInt(1, Math.floor(max / num2));
                answer = num1 / num2;
            break;
        }
        return {
            problem: `${num1} ${operation} ${num2}`,
            answer: answer
        };
    }
}

function runMathQuiz() {
    const generator = new MathProblemGenerator();
    let correctCount = 0;
    let totalCount = 0;

    while (true) {
    const task = generator.generateProblem();

    const userInput = prompt(`Реши пример:\n\n${task.problem}\n\nВведи ответ:`);

    if (userInput === null || userInput.toLowerCase() === 'выход') {
        break;
    }

    const userAnswer = parseFloat(userInput);
    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введи число!');
        continue;
    }

    totalCount++;

    if (userAnswer === task.answer) {
        correctCount++;
        alert('Правильно!');
    } else {
        alert(`Неверно. Правильный ответ: ${task.answer}`);
    }
  }

}

const twoGame = document.getElementById('arithmeticGame');
twoGame.addEventListener('click', runMathQuiz);