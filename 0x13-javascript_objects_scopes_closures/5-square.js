#!/usr/bin/node
//By Emmanuel Oluyege

module.exports = class Square extends require('./4-rectangle.js') {
  constructor (size) {
    super(size, size);
  }
};
