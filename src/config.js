const argv = require("minimist")(process.argv.slice(2));

module.exports = {
  key: argv.key || argv.k,
  group: argv._
};
