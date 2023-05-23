#!/usr/bin/node
// Read the contents of the file asynchronously
const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, contents) {
  if (contents === undefined) {
    console.log(err);
  } else {
    console.log(contents);
  }
});
