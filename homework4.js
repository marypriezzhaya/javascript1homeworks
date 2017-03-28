/*  Task 1  */

var number = prompt ( 'Введите число от 0 до 999:' );
if ( parseInt( number ) <= 999 && parseInt( number ) >= 0 ) {
 if ( number.length < 3 ) {
   var add = 3 - number.length;

   number = '0'.repeat( add ) + number;
 }
var result = {}
result.ones = number.charAt( 2 );
result.tens = number.charAt( 1 );
result.hundreds = number.charAt( 0 );

console.log( 'сотни: ' + result.hundreds );
console.log( 'десятки: ' + result.tens );
console.log( 'единицы: ' + result.ones );
} else {
console.log( 'Слишком большое число' );
}

/*  Task 2  */
