let x = 10;

function scopes1() {
  console.log(x);

  function f() {
    x = 0;
    console.log(x);

    function f2() {
      let x = 1;
      x = 12;
      console.log(x);
    }

    f2();
  }

  f();

  console.log(x);
}

function scopes2() {
  console.log(x);

  function f() {
    let x = 0;
    console.log(x);

    function f2() {
      let x = 1;
      x = 12;
      console.log(x);
    }

    f2();
  }

  f();

  console.log(x);
}

exampleFormatter(scopes1);
exampleFormatter(scopes2);
