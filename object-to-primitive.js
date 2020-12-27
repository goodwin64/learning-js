function getName() {
  return this.name;
}

function getAge() {
  return this.age;
}

function objectToPrimitive() {
  // create users:
  const u1 = {
    age: 24,
    name: 'Max',
    makeMeOlder: function () {
      this.age++;
    },
  };
  const u2 = {
    name: 'Elon Musk',
    age: 45,
  };
  const u3 = {
    age: 5,
  };
  const u4 = {
    name: 'John',
  };

  // mutate user's age:
  u1.makeMeOlder();
  u1.makeMeOlder();
  u1.makeMeOlder();

  // add "cast to primitive" functions to users:
  [u1, u2, u3].forEach(user => {
    user.valueOf = getAge;
  });
  [u1, u2, u4].forEach(user => {
    user.toString = getName;
  });

  // sum users age:
  console.log('Sum age:', u1 + u2 + u3 + u4);

  // create users list:
  const users = [u1, u2, u3, u4];

  // show sorting:
  console.log('unsorted:', users);
  console.log('sorted (desc):', [...users].sort());
  console.log('sorted (asc):', [...users].sort((a, b) => a - b));
}

exampleFormatter(objectToPrimitive);
