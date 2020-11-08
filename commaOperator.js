function commaOperator1() {
  let x;
  x = (2,3);
  return `You probably expect "x" to equal 2.3, but it equals to ${x}`;
}

function commaOperator2() {
  let x = (1,2,3,4,5,6);
  return `x = ${x}`;
}

exampleFormatter(commaOperator1);
exampleFormatter(commaOperator2);
