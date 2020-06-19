const fs = require('fs');

function cat(cmd, fileName) {
  if (cmd === 'cat') {
    fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(data);
      }
    });
  }
}

module.exports = cat;
