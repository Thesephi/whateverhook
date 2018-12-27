// only for use by end-users that did `npm install whateverhook`
const moduleNames = require('fs').readdirSync('./lib/');
const err = new Error("Please `require` specific libraries from `whateverhook/lib/*`. " +
  "available choices are: " + moduleNames.join(", ") + "\n");

err.stack = "";
throw err;
