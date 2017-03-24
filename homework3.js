/* Task 1 */

var i = 1;
while ( i <= 100 ) {
  for ( var n = 1; n <= i; n++ ) {
    if ( n > 1 && n < i && i % n == 0 ) {
      break;
    }
    if ( n > 1 && n < i && i % n != 0 ) {
      continue;
    }
    if ( n == i ) {
      document.write ( i + " " );
    }
  }
  i++;
}

/* Task 2 */
