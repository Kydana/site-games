// Задание 1
// Преобразовать строку 'js' в верхний регистр.

const str = 'js';
const upperStr = str.toUpperCase();
console.log(upperStr);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, 
// содержащий только те элементы первого массива, которые начинаются со второй строки. 
// Регистр символов не влияет на результат.

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
}
console.log(filter(['JavaScript', 'Java', 'Python'], 'jav'))

// Задание 3
// Округлить число 32.58884:
//  - До меньшего целого.
//  - До большего целого.
//  - До ближайшего целого.

const number = 32.58884;

const floorResult = Math.floor(number);
const ceilResult = Math.ceil(number);
const roundResult = Math.round(number);

console.log(`Исходное число: ${number}`);
console.log(`До меньшего целого (Math.floor): ${floorResult}`);
console.log(`До большего целого (Math.ceil): ${ceilResult}`);
console.log(`До ближайшего целого (Math.round): ${roundResult}`);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
// Используйте функции Math.min() и Math.max() для нахождения минимального и максимального значений.

const minValue = Math.min(52, 53, 49, 77, 21, 32);
const maxValue = Math.max(52, 53, 49, 77, 21, 32);


console.log(`Минимальное значение: ${minValue}`);
console.log(`Максимальное значение: ${maxValue}`);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
// Используйте функции Math.random() и Math.floor() для генерации случайных чисел

function printRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
}

printRandomNumber();

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных 
// чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
// В JavaScript функция Math.random() возвращает случайное число от 0 (включительно) до 1 (не включая).

function generateRandomArray(num) {
    return Array.from({ length: Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}
console.log(generateRandomArray(10));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRandom(max, min) {
    return Math.floor(Math.random() * (max -min + 1)) + min;
}
console.log(getRandom(1, 10));

// Задание 8
// Вывести в консоль текущую дату.

console.log(new Date().toJSON().slice(0, 10));

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log('Текущая дата:', currentDate.toLocaleDateString());
console.log('Через 73 дня:', futureDate.toLocaleDateString());

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
// Дату и время можно получить из объекта Date.

function formatDate(date) {
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));