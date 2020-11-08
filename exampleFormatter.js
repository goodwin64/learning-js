let counter = 0;

function exampleFormatter(fn, ...args) {
  const taskLabel = `👇 Task #${counter} (${fn.name})`;
  console.groupCollapsed(taskLabel);
  console.log('args:', args);
  console.log(fn.toString());
  console.log('\n');
  console.log(fn(...args));
  counter++;
  console.groupEnd();
}
