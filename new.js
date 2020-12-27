function Calculator() {
  this.read = function() {
    this.a = Number(prompt('A:'))
    this.b = Number(prompt('B:'))
  }

  this.sum = () => this.a + this.b

  this.mul = () => this.a * this.b
}

let calculator = new Calculator();
calculator.read();

exampleFormatter(function calculatorExample() {
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );
});
