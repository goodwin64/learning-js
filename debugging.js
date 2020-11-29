function withLoop(names) {
  for (let i = 0; i < 10; i++) {
    if (i === 8) {
      debugger;
    }
    const name = names[i];
    console.log(`${i + 1}. Mr. ${name}`);
  }
}

function withClick() {
  const h1 = document.querySelector('h1');
  h1.addEventListener('click', (e) => {
    console.log(e.target);
  });
}

const names = ['Max', 'Dmitriy', 'Alex'];

exampleFormatter(withLoop, names);
exampleFormatter(withClick);
