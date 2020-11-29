function equalsNullOrUndefined(value) {
  // comparisons below are the same from technical POV
  console.log(value === null || value === undefined);
  console.log(value == null);
}

exampleFormatter(equalsNullOrUndefined, 0);
exampleFormatter(equalsNullOrUndefined, NaN);
exampleFormatter(equalsNullOrUndefined, false);
exampleFormatter(equalsNullOrUndefined, null);
exampleFormatter(equalsNullOrUndefined, undefined);
