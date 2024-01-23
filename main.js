// Задачи

prompt('Как тебя зовут?', 'Имя')

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 2

// let a = 2;
// let x = 1 + (a *= 2); // a = 4, x = 5

console.log("" + 1 - 0)
console.log("" - 1 + 0)
console.log(true + false)
console.log(6 / "3")
console.log("2" + "3")
console.log(4 + 5 + "px")
console.log("$" + 4 + 5)
console.log("4" - 2)
console.log("4px" - 2)
console.log(" -9" + 5)
console.log(" -9" - 5)
console.log(null + 1)
console.log(undefined + 1)
console.log(" \t \n" - 2)

// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);

// alert(Number(a) + Number(b))

// ---------------------------------------------------------------------

// Работа с переменными

// let num
// alert(num)

// let a = 10, b = 2;
// alert(
//     `
//     Сумма: ${a + b},
//     Разность: ${a - b},
//     Произведение: ${a * b},
//     Деление: ${a / b},

//     `
// )

// let c = 15, d = 2;
// let result = c + d
// alert(result)

// let a = 10, b = 2, c = 5
// alert(`${a + b + c}`)

// let a = 17, b = 10
// let c = a - b
// let d = 7
// let result = c + d
// alert(result)

// ---------------------------------------------------------------------

// Работа со строками

// let str = 'Привет, Мир!'
// alert(str)

// let str1 = 'Привет', str2 = 'Мир!'
// alert(str1 + ', ' + str2)

// let name = 'Дмитрий'
// alert(`Привет, ${name}!`)

// let age = 16
// alert(`Мне ${age} лет!`)

// ---------------------------------------------------------------------

// Фукнция prompt

// let otvet = prompt('Как тебя зовут?', 'Имя')
// alert(`Ваше имя ${otvet}`)

// let otvet1 = prompt(`Скажи любое число`, 'Число')
// alert(otvet1 ** 2)

// ---------------------------------------------------------------------

// Обращение к символам строки

// let str = 'abcde';
// alert(str[0])
// alert(str[1])
// alert(str[2])
// alert(str[3])
// alert(str[4])

// let num = '12345'
// alert(num[0] * num[1] * num[2] * num[3] * num[4])

// ---------------------------------------------------------------------

// Практика

// let sec = 60;
// let hour = 60 * sec;
// let day = hour * 24;
// let mot = day * 30;
// alert(`Секунды в часах: ${hour}`)
// alert(`Секунды в сутках: ${day}`)
// alert(`Секунды в месяце: ${mot}`)

// let hour, min, sec;
// alert(`${hour}:${min}:${sec}`)

// let num = 4;
// alert(`${num ** 2}`)

// ---------------------------------------------------------------------

// Работа с присваиванием и декрементами

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// var num = 10;
// num++;
// --num;
// num--;
// alert(num)