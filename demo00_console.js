const fs = require('fs');

var out = fs.createWriteStream('./log/out.log');
var err = fs.createWriteStream('./log/err.log');

const console = require('console');
var logger = new console.Console(out,err);
logger.log("log...");
logger.error("err...");