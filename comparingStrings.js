function comparingStrings(a, b) {
  return a > b
    ? `${a} > ${b}`
    : `${a} < ${b}`;
}

exampleFormatter(comparingStrings, 'a', 'b');
exampleFormatter(comparingStrings, '11', '2');
exampleFormatter(comparingStrings, '💙', '💛');
