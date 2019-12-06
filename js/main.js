
// home work - type date


1
// const age = +prompt('Введите ваш возраст');
// if (age >= 0 && age <= 2) {
//     console.log('rebenok');
// }
// else if (age >= 12 && age < 18) {
//     console.log('podrostok');
// }
// else if (age >= 18 && age < 60) {
//     console.log('vzrosliy');
// }
// else if (age >= 60) {
//     console.log('pensioner');
// }
2
// const age = +prompt('Введите number 0-9');
// switch (age) {
//     case 0: console.log(')');
//         break;
//     case 1: console.log('!');
//         break;
//     case 2: console.log('@');
//         break;
//     case 3: console.log('#');
//         break;
//     case 4: console.log('$');
//         break;
//     case 5: console.log('%');
//         break;
//     case 6: console.log('^');
//         break;
//     case 7: console.log('&');
//         break;
//     case 8: console.log('*');
//         break;
//     case 9: console.log('(');
//         break;
//     default: console.log('wrong');
//         break;
// }
3
// let number = +prompt('Vvedite chislo trexznacnoe');
// let digit1 = Math.trunc(number / 100);
// let digit2 = Math.trunc(number / 10) % 10;
// let digit3 = number % 10;
// if (digit1 == digit2 || digit2 == digit3 || digit1 == digit3) {
//     console.log('ne ok');
// }
// else {
//     console.log('ok');
// }
4
// let year = +prompt('Kakeoq seichas god');
// if (year % 4 === 0 && year % 100 !== 0) {
//     console.log('Visokosniy');
// }
// else {
//     console.log('ne visokosniy');
// }
5
// const chislo = +prompt('Vvedite 5-ti snacnoe chislo');
// const capacity = Math.trunc(chislo / 10000);

// if (capacity > 9 || capacity < 1) {
//     console.log('ne 5-ti znachnoe')
// }
// else {
//     let digit1 = Math.trunc(chislo / 10000);
//     let digit2 = Math.trunc(chislo / 1000) % 10;
//     let digit3 = Math.trunc(chislo / 100) % 10;
//     let digit4 = Math.trunc(chislo / 10) % 10;
//     let digit5 = chislo % 10;
//     if (digit1 == digit5 && digit2 == digit4) {
//         console.log('polindron')
//     }
//     else {
//         console.log('ne polindron')
//     }
// }

6
// const summ = +prompt('Vvedite summy v USD');
// const valuta = prompt('Viberite: EUR, UAN, AZN');
// switch (valuta) {
//     case 'EUR': console.log(summ * 0.91);
//         break;
//     case 'UAN': console.log(summ * 24);
//         break;
//     case 'AZN': console.log(summ * 1.7);
//         break;
//     default: console.log('net takoi valuti');
// }
7
// const summSells = +prompt('Vvedite summu pokupki');
// if (summSells >= 200 && summSells <= 300) {
//     console.log(summSells - ((summSells / 100) * 3));
// }
// else if (summSells >= 300 && summSells <= 500) {
//     console.log(summSells - ((summSells / 100) * 5));
// }
// else if (summSells >= 500) {
//     console.log(summSells - ((summSells / 100) * 7));
// }
// else {
//     console.log('WTF')
// }




// CYCLES
//home work цыклы


// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
1
// 
// const number1 = +prompt('Vvedite pervoe chislo');
// const number2 = +prompt('vvedite vtorot chislo');
// const mensheeChislo = number1 <= number2 ? number1 : number2;
// const bolsheeChislo = number1 > number2 ? number1 : number2;
// let sum = 0;
// for (let i = mensheeChislo; i <= bolsheeChislo; i++) {
//     sum += i;
// }
// console.log("summa vsih chisel - ", sum)


2
// Запросить 2 числа и найти только наибольший общий делитель.
// let number1
// let number2
// do {
//     number1 = +prompt('Vvedite pervoe chislo bolshe 0', 1);
//     number2 = +prompt('vvedite vtorot chislo bolshe 0', 1);
// } while (number1 < 1 || number2 < 1)
// const bolsheeChislo = number1 >= number2 ? number1 : number2;
// let max = 0
// for (let i = 1; i <= bolsheeChislo; i++) {
//     if (number1 % i === 0 && number2 % i === 0) {
//         max = i
//     }
// }
// console.log("max", max)


3
// Запросить у пользователя число и вывести все делители этого числа.
// let number1
// do {
//     number1 = +prompt('Vvedite chislo bolshe 0', 1);
// } while (number1 < 1)
// let dividers = ""
// for (let i = 1; i <= number1; i++) {
//     if (number1 % i === 0) {
//         dividers = `${dividers} ${i}`
//     }
// }
// console.log("dividers:", dividers)


4
// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let counter = 10;
// let positiveCounter = 0;
// let negativeCounter = 0;
// let ziroCounter = 0;
// let evenCounter = 0;
// let oddCounter = 0; //нечетные
// do {
//     const number = +prompt(`Vvedite chislo #${counter}`, 1);
//     if (number > 0) {
//         positiveCounter++;
//     } else if (number < 0) {
//         negativeCounter++;
//     } else {
//         ziroCounter++;
//     }

//     if (number % 2 === 0) {
//         evenCounter++;
//     } else {
//         oddCounter++;
//     }

//     counter--;
// }
// while (counter > 0)
// console.log(
//     'positiveCounter: ', positiveCounter,
//     'negativeCounter: ', negativeCounter,
//     'ziroCounter :', ziroCounter,
//     'evenCounter: ', evenCounter,
//     'oddCounter :', oddCounter,
// )

5
// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
// let number1;
// let number2;
// let znak;
// let askAgain = ('yes');
// do {
//     number1 = +prompt('Vvedite pervoe chislo', 5);
//     number2 = +prompt('Vvedite vtoroe chislo', 5);
//     znak = prompt('Vvedite + - / *');
//     switch (znak) {
//         case '+': console.log(number1 + number2);
//             break;
//         case '-': console.log(number1 - number2);
//             break;
//         case '/': console.log(number1 / number2);
//             break;
//         case '*': console.log(number1 * number2);
//             break;
//     }
//     askAgain = prompt('Rewit ewe raz? yes, no', 'yes');
// }
// while (askAgain === 'yes');


6
// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.let dayWeek;


// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
// for (let a = 2; a <= 9; a++) {
//     for (let b = 1; b <= 10; b++)
//         console.log(`${a} * ${b} = ${a * b}`);
// }
