const request = require('request');

function curl(cmd, URL) {
  if (cmd === 'curl') {
    request(URL, (err, response, body) => {
      if (err) {
        throw err;
      } else if (response) {
        process.stdout.write(body);
      }
    });
  }
}

module.exports = curl;
