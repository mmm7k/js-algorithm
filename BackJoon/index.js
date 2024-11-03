const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

input.forEach((line) => {
  const [a, b] = line.split(' ').map(Number);

  if (a < b) {
    console.log('<');
  } else if (a > b) {
    console.log('>');
  } else {
    console.log('==');
  }
});
