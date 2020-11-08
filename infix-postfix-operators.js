function main() {
  let x = 5;
  let a = x++;
  let b = ++x;
  let c = +x++;
  let d = ++x + x++;
  let e = x++ + ++x;
  console.log({ a, b, c, d, e, x });
}

exampleFormatter(main);
