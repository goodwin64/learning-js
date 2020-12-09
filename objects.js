function objectsEqual() {
  const o1 = new Object(null);
  const o2 = {};
  console.log(o1 == o2);
  console.log(o1 === o2);
}

exampleFormatter(objectsEqual);

function addAndDeleteFields() {
  const obj = { x: 1, y: 2 };
  obj.z = 3;
  delete obj.y;
  console.log(obj);
}

exampleFormatter(addAndDeleteFields);

function objectAsKey() {
  // incorrect usage
  const obj = {};
  const key = { nested: 'object' };
  obj[key] = 123;
  console.log(obj);

  // correct usage:
  const map = new Map();
  map.set(key, 123);
  console.log('map:', map, 'key:', key, 'value:', map.get(key));

  // but better is to use primitives as keys!
}

exampleFormatter(objectAsKey);

function objectLogging() {
  const obj = {
    num: 1,
    str: 'abc',
    bool: false,
    symbol: Symbol('random symbol'),
    date: new Date(),
    regex: /[a-zA-Z0-9]/g,
    arr: [1, 2, 3],
    nested: {
      x: 123,
      1: 1,
    },
  };
  console.log(obj);
  console.table(obj);
}

exampleFormatter(objectLogging);

function objectConstant() {
  const obj = {
    x: 123,
  };

  // we can change fields:
  obj.x = 456;
  console.log(obj);

  // but we can't change link to the "const" object:
  try {
    obj = {
      y: 789,
    };
  } catch (e) {
    console.log(e);
  }
  console.log(obj);

  // though, we can change the "let" or "var" objects:
  let obj2 = {
    x: 1,
  };
  obj2 = {
    y: 2,
  };
  obj2 = 5;
  console.log(obj2);
}

exampleFormatter(objectConstant);

function objectComputedProperties() {
  const computedKey = 'LONG KEY, CANNOT BE USED IN LITERAL.';
  const obj = {
    shortKey: 'some value',
    [computedKey]: 'another value',
    [(() => 'javascript code is allowed here')()]: 'yet another value',
  };
  console.log(obj);
}

exampleFormatter(objectComputedProperties);
