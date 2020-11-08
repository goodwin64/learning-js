function postfix() {
  let x = 5;
  const result = x++;
  console.log({ result, x });
}

function infix() {
  let x = 5;
  const result = ++x;
  console.log({ result, x });
}

function infixAndPostfix() {
  let x = 5;
  const result = ++x + x++;
  console.log({ result, x });
}

function postfixAndInfix() {
  let x = 5;
  const result = ++x + x++;
  console.log({ result, x });
}

exampleFormatter(postfix);
exampleFormatter(infix);
exampleFormatter(infixAndPostfix);
exampleFormatter(postfixAndInfix);
