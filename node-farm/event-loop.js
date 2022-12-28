const fs = require('fs');
setTimeout(() => console.log('Timer 1 finnished'), 0);
setImmediate(() => console.log('Immediate 1 finidhed'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('-----following are callbacks -------');

  setTimeout(() => console.log('Timer 2 finnished'), 0);
  setTimeout(() => console.log('Timer 3 finnished'), 3000);
  setImmediate(() => console.log('Immediate 2 finidhed'));

  process.nextTick(() => console.log('Process.nextTick'));
  
});

console.log('Hello from the top-level code');
