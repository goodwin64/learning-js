exampleFormatter(function showMeThisAndThat() {
  const obj1 = {
    name: 'Dmitry',
    surname: 'Duplenko',
    fullName(delimiter = ' ', ending = '!') {
      return this.name + delimiter + this.surname + ending;
    },
  };

  const obj2 = {
    name: 'Paris',
    surname: 'Hilton',
    fullName: obj1.fullName,
  };

  console.log('full name 0 - borrowing context', obj2.fullName());

// simple function with no implicit values; super easy
  function fullName(name, surname) {
    return name + surname;
  }

  console.log('full name 1 - with object context', obj1.fullName());

  const getFullName = obj1.fullName;

// var name = 'Max';
// var surname = 'Donchenko';

  console.log('full name 2 - without context', getFullName());

  const contextForCall = {
    name: 'Elon',
    surname: 'Musk',
  };

  console.log('full name 3 - passing context via "call"', getFullName.call(contextForCall, ':', '!!!'));

  console.log('full name 4 - invoking with context without "call"', getFullName(contextForCall));

  const contextForApply = {
    name: 'Jeff',
    surname: 'Bezos',
  };

  console.log('full name 5 - passing context via "apply"', getFullName.apply(contextForApply, ['::', '!!']));

  const contextForBind = {
    name: 'Mark',
    surname: 'Zuckerberg',
  };

  const getMZfullName = getFullName.bind(contextForBind);
  const getBGfullName = getFullName.bind({
    name: 'Bill',
    surname: 'Gates',
  });

  console.log('full name 6 - create new function with predefined context via "bind"', getMZfullName('::', '!!'));
  console.log('full name 7 - create new function with predefined context via "bind"', getBGfullName('::', '!!'));

  console.log('full name 8 - "bound" functional invocation via "call" - "bind" is more prioritized', getBGfullName.call(contextForBind, '^^', '**'));
});
