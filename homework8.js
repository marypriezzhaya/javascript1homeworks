if (!("a" in window)) {
var a = 1;
}
alert(a); // подозреваю, что ничего не получится - выдаст undefined или скрипт не выполнится из-за ошибки, потому что "a" в окне наверняка есть, особенно если в нем есть скрипт с "а", так что a не создастся.
// Но если вдруг удастся как-то выполнить этот if , то выведет 1, потому что это не функция и область видимости переменных if не ограничивает.

// ------------------
var b = function a(x) {
x && a(--x);
};
alert(a); // либо я чего-то не понимаю, либо результата не будет, будет ошибка или undefined. Здесь не определено, что такое a - нельзя же вот так взять и вызвать функцию прямо в alert. И аргументов ей не передали.

// ------------------
function a(x) {
return x * 2;
}
var a;
alert(a); // есть смутное подозрение, что благодаря var a здесь сообщения об ошибке не будет. Но аргумент функции не передали. Выведет x * 2 как текстовое сообщение?

// ------------------
function b(x, y, a) {
arguments[2] = 10;
alert(a); // 10
}
b(1, 2, 3);
// Функция присваивает стоящему на третьем месте аргументу значение 10, это аргумент a - переданное при вызове функции значение заменяется, так что при вызове выводится 10

// ------------------
function a() {
alert(this);
}
a.call(null);
// подозреваю, что window - эта конструкция отсылает к контексту самого верхнего уровня.