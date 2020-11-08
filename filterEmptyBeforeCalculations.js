function emptyFilteredBeforeCalculations(x) {
  // "bad values" are filtered out, fine ✅
  if (x === null || x === undefined) {
    return;
  }
  return calculate(x);
}

function emptyNotFilteredBeforeCalculations(x) {
  // no "bad values" filtering, may cause error ❌
  return calculate(x);
}

function calculate(x) {
  // any business logic you want
  if (x > 0) {
    return 'POSITIVE';
  } else if (x < 0) {
    return 'NEGATIVE';
  } else {
    return 'ZERO';
  }
}

exampleFormatter(emptyFilteredBeforeCalculations, null);
exampleFormatter(emptyNotFilteredBeforeCalculations, null);

exampleFormatter(emptyFilteredBeforeCalculations, undefined);
exampleFormatter(emptyNotFilteredBeforeCalculations, undefined);
