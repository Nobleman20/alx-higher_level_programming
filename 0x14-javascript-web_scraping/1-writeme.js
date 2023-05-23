#!/usr/bin/node
// a script that writes data to a file
const fs = require('fs');
fs.writeFileSync(process.argv[2], process.argv[3]);
