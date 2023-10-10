const os = require("os");

// User Info
const user = os.userInfo();
console.log(user);

// System uptime
console.log(`The system uptime is ${os.uptime()} seconds`);

// System Info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
