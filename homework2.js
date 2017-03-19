/*  Task 1  */
var a = 1 , b = 1 , c , d;
c = ++a ; alert ( c ); // 2 - выводится значение ПОСЛЕ увеличения на 1, потому что префиксная запись
d = b++; alert ( d ); // 1 - выводится исходное значение, потому что постфикная запись, но в переменную уже записано увеличенное на единицу значение
c = ( 2 + ++a ); alert ( c ); // 5 - перед вычислением этого выражение значение a уже было = 2, увеличили на 1 и уже это полученное значение прибавили к 2
d = ( 2 + b++); alert ( d ); // 4 - во время прошлого вычисления с участием b значение переменной увеличилось до 2, это значение используется при вычислении d, но в переменной сохраняется увеличенное еще на 1 значение
alert ( a ); // 3 - к a 2 раза прибавили единицу во время прошлых вычислений
alert ( b ); // 3 - к b 2 раза прибавили единицу во время прошлых вычислений? так что в итоге в переменных хранятся одинаковые значения

/*  Task 2  */
var a = 2;
var x = 1 + ( a *= 2 );
// 5 - при вычислении x переменой a присваеивается значение 4 в результате умножения хранившегося в ней значения на 2

/*  Task 3  */
var a = 42;
var b = -13;
if ( a >= 0 && b >= 0 ) {
  alert ( a - b );
}
else if ( a < 0 && b < 0 ) {
  alert ( a * b );
}
else {
  alert ( a + b );
}

/*  Task 4  */
//если все сразу, то
var a = 8;
switch ( a ) {
  case 0 :
  alert ( "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 1 :
  alert ( "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 2 :
  alert ( "2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 3 :
  alert ( "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 4 :
  alert ( "4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 5 :
  alert ( "5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 6 :
  alert ( "6, 7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 7 :
  alert ( "7, 8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 8 :
  alert ( "8, 9, 10, 11, 12, 13, 14, 15" );
  break;
  case 9 :
  alert ( "9, 10, 11, 12, 13, 14, 15" );
  break;
  case 10 :
  alert ( "10, 11, 12, 13, 14, 15" );
  break;
  case 11 :
  alert ( "11, 12, 13, 14, 15" );
  break;
  case 12 :
  alert ( "12, 13, 14, 15" );
  break;
  case 13 :
  alert ( "13, 14, 15" );
  break;
  case 14 :
  alert ( "14, 15" );
  break;
  case 15 :
  alert ( "15" );
  break;
}
// если по очереди :
var a = 8;
switch ( a ) {
  case 0 :
  alert ( "0" );
  case 1 :
  alert ( "1" );
  case 2 :
  alert ( "2" );
  case 3 :
  alert ( "3" );
  case 4 :
  alert ( "4" );
  case 5 :
  alert ( "5" );
  case 6 :
  alert ( "6" );
  case 7 :
  alert ( "7" );
  case 8 :
  alert ( "8" );
  case 9 :
  alert ( "9" );
  case 10 :
  alert ( "10" );
  case 11 :
  alert ( "11" );
  case 12 :
  alert ( "12" );
  case 13 :
  alert ( "13" );
  case 14 :
  alert ( "14" );
  case 15 :
  alert ( "15" );
}

/* Task 5 */

  function addition ( a, b ) {
    var result = a + b;
    return result;
  }

  function substraction ( a, b ) {
    var result = a - b;
    return result;
  }

  function multiplication ( a, b ) {
    var result = a * b;
    return result;
  }

  function division ( a, b ) {
    var result = a / b;
    return result;
  }

  /* Task 6 */
  function mathOperation ( a, b, operation ) {
    var res;
  switch ( operation ) {
    case 'add':
    res = addition( a, b );
    break;
    case 'substract':
    res = substraction( a, b );
    break;
    case 'multiply':
    res = multiplication( a, b );
    break;
    case 'divide':
    res = division( a, b );
    break;
  }
  return res;
    }
var weGotIt = mathOperation ( 3, 2, 'add' );
alert ( weGotIt );
