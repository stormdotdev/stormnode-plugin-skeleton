const path = require('path');

// load environment configuration at the first execution
require('dotenv').config({ path: path.dirname(__dirname) + '/.env' });

const defaultArgs = {
  MY_SECRET_VAR: process.env.MY_SECRET_VAR || null,
  SHOULD_REVEAL_SECRET: false
};

module.exports = {
  // optional, needed to receive arguments
  setArguments: function(args) {
    this.args = Object.assign({}, defaultArgs, args);
  },

  // optional, needed to receive node config
  setNodeOptions: function(config) {},

  // required, do something, return a Promise
  run: function() {
    return new Promise((resolve, reject) => {
      const shouldRevealSecret = this.args.SHOULD_REVEAL_SECRET === 'douglas';

      resolve({
        shouldRevealSecret,
	secretVar: shouldRevealSecret ? this.args.MY_SECRET_VAR : 0
      });
    });
  }
};

