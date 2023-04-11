#!/usr/bin/node
// Script by Emmanuel Oluyege

const num = Math.floor(Number(process.argv[2]));
console.log(isNaN(num) ? 'Not a number' : `My number: ${num}`);
