const delimiter = '-----------------------------';

let counter = 0;

function exampleFormatter(fn) {
  if (counter) {
    console.log(delimiter);
  }
  console.log(fn.toString());
  console.log('\n');
  console.log(fn());
  counter++;
}
