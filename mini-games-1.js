// 1 Game Угадай число
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

// 2 Game простая арифметика
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

// 3 Game периверни текст
function reverseText() {
    const turnOwer = prompt('Введите текст:');
    const reversedText = turnOwer.split('').reverse().join('');

    alert(`Перевёрнутый текст: ${reversedText}`);
}

const turnButton = document.getElementById('owerTurn');
turnButton.addEventListener('click', reverseText);

// 4 Game камень, ножницы, бумага

const choices = ["камень", "ножницы", "бумага"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Ничья!";
    }
    if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        return "Вы победили!";
    } else {
        return "Компьютер победил!";
    }
}

function playGame() {
    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
    while (!choices.includes(userChoice)) {
        userChoice = prompt("Некорректный ввод! Выберите: камень, ножницы или бумага").toLowerCase();
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    const message = `
    Ваш выбор: ${userChoice} 
    Выбор компьютера: ${computerChoice} 
    Результат: ${result}
    `;
    console.log(message);
    alert(message);
}

const gamefourButton = document.getElementById('RockPaperScissors');
gamefourButton.addEventListener('click', playGame);

// 5 Game простая викторина
function victoryna() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зелёный"],
            correctAnswer: 2 // номер правильного ответа (2 = "Синий")
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2 // 2 = "Семь"
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2 // 2 = "Пять"
        }
    ];

    let num = 0;

    for (let i = 0; i < quiz.length; i++) {
        const questionText = `${quiz[i].question}\n\n${quiz[i].options.join('\n')}\n\nВведите номер правильного ответа (1, 2 или 3):`;
        
        let quizQuest = prompt(questionText);
        
        if (quizQuest === null || quizQuest.trim() === '') {
            alert("Вы не ввели ответ. Будем считать, что он неверный.");
            continue;
        }
        
        quizQuest = Number(quizQuest);
        
        if (isNaN(quizQuest) || quizQuest < 1 || quizQuest > 3) {
            alert("Некорректный ввод! Введите число 1, 2 или 3.");
            continue;
        }
        
        if (quizQuest === quiz[i].correctAnswer) {
            num++;
            alert("Верно! ✓");
        } else {
            alert(`Неверно! ✗\nПравильный ответ: ${quiz[i].correctAnswer}.`);
        }
    }

    alert(`Викторина завершена!\nВы ответили правильно на ${num} из ${quiz.length} вопросов.`);
}

const game4Button = document.getElementById('victorynaGame');
game4Button.addEventListener('click', victoryna);

// 6 Game генератор случайных цветов

