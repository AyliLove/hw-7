function playGameSeasons() {
  let monthNumber;
  let repeatGame = true;

  do {
    monthNumber = Number(
      prompt(
        "Введите номер месяца (от 1 до 12) и вы узнаете, к какому времени года он относится:"
      )
    );
    if (monthNumber === undefined) {break};
    if (
      isNaN(monthNumber) ||
      monthNumber === "" ||
      monthNumber < 1 ||
      monthNumber > 12
    ) {
      alert("Вы ввели некорректное значение. Попробуйте еще раз.");
      continue;
    }
    switch (monthNumber) {
      case 1:
      case 2:
      case 12:
        alert(`Winter`);
        break;
      case 3:
      case 4:
      case 5:
        alert(`Spring`);
        break;
      case 6:
      case 7:
      case 8:
        alert(`Summer`);
        break;
      case 9:
      case 10:
      case 11:
        alert(`Autumn`);
        break;
      default:
        break;
    }

    repeatGame = confirm("Желаете сыграть еще раз?");
  } while (repeatGame);
}


function playGameSeasons2() {
  let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
words = words.sort(() => Math.random() - 0.5);

alert(words);

let firstWord = prompt("Назови первый фрукт?");
let lastWord = prompt("Назови последний фрукт?");

if (firstWord === words[0] && lastWord === words[words.length - 1]) {
  alert("Поздравляю, вы угадали оба элемента!");
} else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно.");
}
}