
let counter = 0;

function exampleFormatter(fn) {
  const taskLabel = `👇 Task #${counter} (${fn.name})`;
  console.groupCollapsed(taskLabel);
  console.log(fn.toString());
  console.log('\n');
  console.log(fn());
  counter++;
  console.groupEnd();
}
