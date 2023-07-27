// Задание 1
let str = 'js';
console.log(str.toUpperCase());


// Задание 2

function filterArrayByString(array, string) {
    return array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()));
  }

  const array = ['Кошка', 'Кит', 'Комар', 'Носорог'];
  const string = 'ко';
  const filteredArray = filterArrayByString(array, string);
  console.log(filteredArray); 

// Задание 3

let number1 = Math.floor(32.58884); // Округление до меньшего целого

let number2 = Math.ceil(32.58884); // Округление до большего целого

let number3 = Math.round(32.58884); // Округление до ближайшего целого

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);

// Задание 5

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
  }
  
getRandomNumber();

// Задание 6

function getRandomArray(n) {
  const arr = [];
  let i = Math.floor(Math.random() * n);
  arr.push(i);
  while (arr.length < n / 2) {
    i = Math.floor(Math.random() * (n - arr.length));
    arr.push(i + arr.length);
  }

  return arr;
}


const arr = getRandomArray(10);
console.log(arr); 




// Задание 7

function getRandomInt(min, max) {
    if (min > max || min === max) {
      throw new Error('Неправильно задан диапазон чисел.');
    }

    const difference = max - min;
    const randomNumber = Math.random() * (difference + 1); 
    const result = Math.floor(randomNumber);
    return result + min;
  }
  
  const minNumber = 10;
  const maxNumber = 20;
  const randomNum = getRandomInt(minNumber, maxNumber);
  console.log(randomNum);

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

let currentDate1 = new Date(); 

currentDate1.setDate(currentDate1.getDate() + 73);

console.log(currentDate1);

// Задание 10

function formatDate(dateString) {
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `Дата: ${day} ${month} ${year} - это ${dayOfWeek}.
Время: ${hours}:${minutes}:${seconds}`;
}

const result = formatDate('2021-10-20T10:30:00');
console.log(result);


// Задание
