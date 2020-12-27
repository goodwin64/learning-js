exampleFormatter(function calculatorExample() {
  function Calculator() {
    this.read = function () {
      this.a = 15;
      this.b = 10;
    };

    this.sum = () => this.a + this.b;

    this.mul = () => this.a * this.b;
  }

  let calculator = new Calculator();
  calculator.read();

  console.log('Sum=' + calculator.sum());
  console.log('Mul=' + calculator.mul());
});
