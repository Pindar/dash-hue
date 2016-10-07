const nconf = require('nconf');
const pkg = require('../package.json');

module.exports.config = nconf
  .env()
  .argv()
  .get();
