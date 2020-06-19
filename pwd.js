function pwd(cmd) {
  if (cmd === 'pwd'){
    process.stdout.write(`${process.cwd()}`);
  }
}
  module.exports = pwd;
