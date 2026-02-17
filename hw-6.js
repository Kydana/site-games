// Задание 1
// Дан массив:[1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. 
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const aaa = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < aaa.length; i++) {
    console.log(aaa[i]);
    if (aaa[i] === 10) {
        break;
    }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите индекс значения 4 в этом массиве.

const bbb = [1, 5, 4, 10, 0, 3];
const index = bbb.indexOf(4);

console.log(index);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const ccc = [1, 3, 5, 10, 20];
const result = ccc.join(' ');

console.log(result);

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида:
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const size = 3;
const ddd = [];

for (let i = 0; i < size; i++) {
    ddd.push(Array(size).fill(1));
}

console.log(ddd);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

const eee = [1, 1, 1];
eee.push(2, 2, 2);

console.log(eee);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort т сортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

const fff = [9, 8, 7, 'a', 6, 5];
fff.sort();
const fffResult = fff.filter(Num => Num >= 1);
console.log(fffResult);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, 
// есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

const ggg = [9, 8, 7, 6, 5];
const userPrompt = prompt('Угадайте число от 1 до 10');

const gggNumber = Number(userPrompt);

if (ggg.includes(gggNumber)) {
    alert('Угадал');
    } else {
        alert('Не угадал');
}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.
// Для этого задания вам пригодится метод reverse(). Он располагает элементы массива в порядке, обратном исходному.

let hhh = 'abcdef';
hhh = hhh.split('');

console.log(hhh);

hhh.reverse();
hhh = hhh.join('');

console.log(hhh);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const iii = [[1, 2, 3], [4, 5, 6]];
const iiiFlat = iii.flat();

console.log(iiiFlat);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for. 
// В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. Обратите внимание, что у последнего элемента нет следующего.

const jjj = [3, 7, 1, 9, 4, 6, 2];

for (let i = 0; i < jjj.length - 1; i++) {
    const current = jjj[i];
    const next = jjj[i + 1];
    const sum = current + next;
    
    console.log(`Сумма элементов [${i}] и [${i+1}]: ${current} + ${next} = ${sum}`);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function squareArray(kkk) {
    return kkk.map(num => num ** 2);
}

const kkkNumbers = [1, 2, 3, 4, 5];
const squares = squareArray(kkkNumbers);
console.log(squares);

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

function lllLengths(lll) {
    return lll.map(str => str.length);
}

console.log(lllLengths(['привет', 'мир', 'код']));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

function mmmNumbers(mmm) {
    return mmm.filter(num => num < 0);
}

console.log(mmmNumbers([-3, 8, 9, -2, 1]));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода 
// Math.random() в диапазоне от 0 до 10. В данном массиве найдите все четные значения и добавьте их в новый массив. 
// Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

const nnnRandom = [];
for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 11);
    nnnRandom.push(randomNum);
}

console.log('Исходный массив:', nnnRandom);

const nnnNumbers = [];

for (const nnn of nnnRandom) {
    if (nnn % 2 === 0) { 
        nnnNumbers.push(nnn);
    }
}

console.log('Чётные числа:', nnnNumbers);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const ooo = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const oooSum = ooo.reduce((acc, num) => acc + num, 0);
const oooAverage = oooSum / ooo.length;

console.log('Массив:', ooo);
console.log('Среднее:', oooAverage);