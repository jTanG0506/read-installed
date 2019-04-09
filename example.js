var readInstalled = require("read-installed")
// optional options
var options = { dev: false, log: console.log, depth: 2 }
readInstalled(".", options, function (er, data) {
  console.log(data);
})