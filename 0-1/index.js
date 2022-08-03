const fs = require('fs');
const path = require('path');

const context = fs.readFileSync(path.join(__dirname, 'a.txt')).toString();

const lines = context.split('\n');

const colors = {
  black: '\033[40m  \033[0m',
  white: '\033[47m  \033[0m',
};

const valueMap = {
  1: 'black',
  0: 'white',
};

while (lines.length > 0) {
  const line = lines.shift();
  process.stdout.write(
    [...line.split('').map((c) => colors[valueMap[c]]), '\n'].join('')
  );
}
