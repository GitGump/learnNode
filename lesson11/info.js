var os = require("os")

var hostname = os.hostname()
console.log("hostname is " + hostname)

var type = os.type()
console.log("type is " + type)

var platform = os.platform()
console.log("platform is " + platform)

var totalmem = os.totalmem()
console.log("total memory is " + totalmem)

var freemem = os.freemem()
console.log("free memory is " + freemem)

var cpus = os.cpus()
console.dir("cpus is " + cpus)

var network = os.networkInterfaces()
console.dir("network interfaces are " + network)
