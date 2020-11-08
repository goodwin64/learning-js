function ternary(x) {
  x = Math.floor(Math.random() * 5 + 1);
  let y;
  console.log(1, { x, y });

  if (x === 1) {
    y = 1000;
  } else if (x === 2) {
    y = 2500;
  } else if (x === 3) {
    y = 10000;
  } else {
    y = 50000;
  }
  console.log(2, { x, y });

  y = (x === 1)
    ? 1000
    : (x === 2)
      ? 2500
      : (x === 3)
        ? 10000
        : 50000;
  console.log(3, { x, y });
}

exampleFormatter(ternary);
