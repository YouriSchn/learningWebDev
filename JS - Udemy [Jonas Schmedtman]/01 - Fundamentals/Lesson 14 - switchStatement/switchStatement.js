const day = 'monday';

switch(day) {
  case 'monday': // day === monday
    console.log('Plan course structure');
    console.log('Go to the mall');
    break; // stops the execution of the code, is needed
  case 'tuesday':
    console.log('Prepare video\'s');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code');
    break;
  case 'friday':
    console.log('Add stuff to GitHub');
    break;
  case 'saterday':
  case 'sunday':
    console.log('Take a restday');
    break;
  default:
  console.log('Not a valid day!');       
}

// Exercise, change the code above to an if/else statement
if (day === 'monday') {
  console.log("Plan course structure");
  console.log('Go to the mall');
} else if (day === 'tuesday') {
  console.log('Prepare video\'s');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('write code');
} else if (day === 'friday') {
  console.log('Add stuff to GitHub');
} else if (day === 'saterday' || day === 'sunday') {
  console.log('Take a restday');
} else {
  console.log('Not a valid day!');
}