const os = require('os');

console.log(os.userInfo());
console.log(os.uptime());

const OS_Info = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(OS_Info);