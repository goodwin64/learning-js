function main() {
  const numbers = [
    0,
    -0,
    NaN,
    Infinity,
    -Infinity,
    42,
    Math.PI,
    2e3,
    0b101,
    0x1af,
    0o765,
  ];
  console.log('numbers', numbers);
}

exampleFormatter(main);
