/* Task 1 */

var i = 1;
while ( i <= 100 ) {
  for ( var n = 1; n <= i; n++ ) {
    if ( n > 1 && n < i && i % n == 0 ) {
      break;
    }
    else if ( n > 1 && n < i && i % n != 0 ) {
      continue;
    }
    if ( n == i ) {
      document.write ( i + " " );
    }
  }
  i++;
}

/* Task 2 */

var i = 0;
do {
  if ( i == 0 ) {
    console.log ( i + " - это ноль" );
  }
  else if ( i % 2 != 0) {
    console.log ( i + " - это нечетное число" );
  }
  else {
    console.log ( i + " - это четное число" );
  }
  i++
} while ( i <= 10 );

/* Task 3 */

for ( var i = 0; i <= 9; i++ ) {

}
